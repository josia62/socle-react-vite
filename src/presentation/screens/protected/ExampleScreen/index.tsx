import { UserSA } from '@/services/applicatif/User.sa'

const ExampleScreen = () => {
  const {  getUsersSA, updateUserConnected } = UserSA();
  const { isPending, error, data, isFetching } = getUsersSA();
  const update = async() => {
    const dataToSend = { id: '6672bb423c616ed18f2c802c', data: { isConnected: false } }
    updateUserConnected.mutate(dataToSend);
  }

  return (
    <div>
      <button onClickCapture={update}>HELLO WORLD</button>
    </div>
  )
}

export default ExampleScreen;
