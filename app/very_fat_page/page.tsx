'use client';
import NavHeader from '@/components/NavHeader';
import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  Snackbar,
  TextField,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';

function page() {
  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const [alert, setAlert] = useState(false);
  const [enteredValues, setEnteredValues] = useState<Array<String>>([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const closeAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(false);
  };

  function handleClick() {
    const value = inputRef.current!.value;
    const num = Number(value);
    if (num && num % 2 === 0) {
      setAlert(true);
    } else {
      setEnteredValues((prev: Array<String>) => {
        return [...prev, value.split('').reverse().join('')];
      });
      inputRef.current!.value = '';
    }
  }

  return (
    <>
      {!isLoading && (
        <>
          <NavHeader />
          <div className="flex mt-3 gap-2">
            <TextField label="Значение" inputRef={inputRef} />
            <Button color="success" variant="outlined" onClick={handleClick}>
              Отправить
            </Button>
          </div>
          <div className="mt-4">
            <span>Список введенных значений:</span>
            <ul>
              {enteredValues.map((value) => {
                return <li key={v4()}>{value}</li>;
              })}
            </ul>
          </div>
          <Snackbar open={alert} autoHideDuration={5000} onClose={closeAlert}>
            <Alert onClose={closeAlert} severity="error" sx={{ width: '100%' }}>
              Четное значение
            </Alert>
          </Snackbar>
        </>
      )}
      {isLoading && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}

export default page;
