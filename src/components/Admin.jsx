import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from "../api/adminSlice";

const Admin = () => {
  const { data, error, isLoading } = useGetAccountsQuery();
  const [addAccount] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();

  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h1>Admin Component</h1>

      {isLoading ? (
        <p>Loading......</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <>
          {data &&
            data.map((account) => (
              <p key={account.id}>
                {account.id}: {account.amount}
                <button onClick={() => deleteAccount(Number(account.id))}>Delete</button>
                <button
                  onClick={() => updateAccount({ id: Number(account.id), amount: 777 })}
                >
                  update
                </button>
              </p>
            ))}
        </>
      )}

      <button
        onClick={() => addAccount({ id: Number(data.length + 1), amount: 10000 })}
      >
        Add Account
      </button>
    </div>
  );
};

export default Admin;
