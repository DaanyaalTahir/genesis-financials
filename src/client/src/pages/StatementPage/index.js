import React, { useState, useEffect } from "react";
import AccountSelect from "../../components/AccountSelect";
import StatementTable from "./Components/statementTable";

function StatementPage() {
  const [selectedAccount, setSelectedAccount] = useState(undefined);

  useEffect(() => {
    console.log(selectedAccount);
  }, [selectedAccount]);

  return (
    <div className="statementPage_Container">
      <AccountSelect setSelectedAccount={setSelectedAccount} />
      {selectedAccount && (
        <StatementTable selectedAccount={selectedAccount} />
      )}
    </div>
  );
};


export default StatementPage;
