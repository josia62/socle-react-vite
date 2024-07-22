import { UserSA } from '@/services/applicatif/User.sa'

const ExampleScreen = () => {
  const {  getUsersSA } = UserSA();
  const { isPending, error, data, isFetching } = getUsersSA();
  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  )
}

export default ExampleScreen;
