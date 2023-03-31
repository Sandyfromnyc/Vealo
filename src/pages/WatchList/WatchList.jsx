import { checkToken } from '../../utilities/users-service';

export default function WatchList() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  return (
    <>
      <h1>Watch List</h1>

      
      <button onClick={handleCheckToken}>Do I need this button?</button>
    </>
  );
}