import { Header } from "../../components/Header";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const productsFilterSchema = z.object({
  cep: z.string().min(8, {
    message: "O CEP deve conter exatamente 8 dígitos."
  }).max(8, {
    message: "O CEP deve conter exatamente 8 dígitos."
  }),
  rua: z.string().min(1, {
    message: "Declare o nome da rua."
  }),
  numero: z.number().min(1, {
    message: "Declare o número."
  }),
  complemento: z.string().optional(),
  bairro: z.string().min(1, { 
    message: "Declare o bairro."
  }),
  cidade: z.string().min(1, { 
    message: "Declare a cidade."
  }),
  uf: z.string().min(2, {
    message: "O UF deve conter exatamente 2 caracteres."
  }).max(2, {
    message: "O UF deve conter exatamente 2 caracteres."
  })
});

type productsFilterSchema = z.infer<typeof productsFilterSchema>;

function CheckOut() {
  const { register, setValue, formState: { errors } } = useForm<productsFilterSchema>({
    resolver: zodResolver(productsFilterSchema)
  });
  
  return (
   <>
    <Header/>
    <h1>Checkout</h1>
   </>
  );
}

export default CheckOut;
