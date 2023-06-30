'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const App = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/home');
  }, []);

 const [name, setName] = useState();

  return null; // ou qualquer componente de carregamento temporário
};

export default App;
