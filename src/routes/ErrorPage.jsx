import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="font-bold text-6xl mb-4">Ops!</h1>
      <p className="text-2xl m-4">Tivemos um problema...</p>
      <p className="mb-2">{error.statusText}</p>
      <p>{error.error.message}</p>
    </div>
  )
}

export default ErrorPage