'use client';
import React, { useRef, useState } from 'react';
import { Alert, Button, Snackbar, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';

function page() {
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [alert, setAlert] = useState(false);
  const router = useRouter();

  function handleClick() {
    if (
      loginRef.current!.value === 'admin' &&
      passwordRef.current!.value === 'password'
    ) {
      // document.cookie = 'access_token=123456;';
      Cookie.set('access_token', '123456');
      router.refresh();
      router.push('/');
    } else {
      setAlert(true);
    }
  }

  const closeAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(false);
  };

  return (
    <>
      <form className="flex flex-col mt-5 max-w-4xl mx-auto gap-3">
        <TextField label="login" inputRef={loginRef} />
        <TextField label="password" type="password" inputRef={passwordRef} />
        <Button color="success" variant="outlined" onClick={handleClick}>
          Login
        </Button>
      </form>
      <Snackbar open={alert} autoHideDuration={5000} onClose={closeAlert}>
        <Alert onClose={closeAlert} severity="error" sx={{ width: '100%' }}>
          Неверный логин или пароль
        </Alert>
      </Snackbar>
    </>
  );
}

export default page;
