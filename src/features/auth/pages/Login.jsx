import {useState} from 'react';
import {css} from '@emotion/react';
import {useNavigate} from 'react-router-dom';
import {isValidationError} from '@/utils/formRequest';
import {Box, Text, Button} from '@/components/atoms';
import {Colors} from '@/assets/styles';
import {AuhtInput} from '../components/AuthInput';
import {accountNameReg} from '../config';
import {loginUser} from '../api';

const initialState = {
  account_name: '',
  password: '',
};

const initialError = {
  message: '',
  key: '',
};

const FORM_CONFIG = [
  {
    key: 'account_name',
    label: 'アカウント名',
    placeholder: 'tanaka',
    type: 'text',
  },
  {
    key: 'password',
    label: 'パスワード',
    placeholder: 'password',
    type: 'password',
  },
];

export const Login = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(initialError);
  const navigate = useNavigate();

  const isDisabled = Object.values(state).some(val => !val);

  const handleTextChange = (value, key) => {
    const newState = {...state, [key]: value};
    setState(newState);
  };

  const onSubmit = async () => {
    try {
      if (!accountNameReg.test(state.account_name)) {
        setError({message: 'アカウント名は半角英数字を入力してください', key: 'account_name'});
        return;
      }

      const response = await loginUser(state);

      if (!response.data) {
        alert('認証情報に誤りがあります');
        return;
      }

      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (e) {
      console.log(e);
      isValidationError(e.response.status);
    }
  };

  return (
    <Box css={container}>
      <Box css={title}>
        <Text fontWeight={700} fontSize={20} textAlign="center">
          Twitter Trace
        </Text>
        <Text fontWeight={700} fontSize={18} textAlign="center">
          Login
        </Text>
      </Box>
      <Box css={form}>
        {FORM_CONFIG.map(config => (
          <Box key={config.key}>
            <Box css={formItem}>
              <AuhtInput
                type={config.type}
                label={config.label}
                value={state[config.key]}
                placeholder={config.placeholder}
                onChange={event => handleTextChange(event.target.value, config.key)}
              />
            </Box>
            {!!error && error.key === config.key && (
              <Box css={errorWrap}>
                <Text fontSize={12} color={Colors.Status.Error}>
                  {error.message}
                </Text>
              </Box>
            )}
          </Box>
        ))}
      </Box>
      <Box css={button}>
        <Button disabled={isDisabled} onClick={onSubmit}>
          ログイン
        </Button>
      </Box>
    </Box>
  );
};

const container = css`
  flex: 1;
  padding: 32px 24px;
  gap: 80px;
`;

const title = css`
  gap: 8px;
`;

const form = css`
  gap: 32px;
`;

const formItem = css`
  border-bottom: 1px solid ${Colors.Border.Primary};
`;

const button = css`
  width: calc(100% - 48px);
  position: absolute;
  bottom: 40px;
`;

const errorWrap = css`
  padding: 0 12px;
  margin-top: 8px;
`;
