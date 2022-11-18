import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useSelector } from "react-redux";
import "./AccountSelect.scss";

const { Option } = Select;

function AccountSelect({ setSelectedAccount }) {
  const [parsedAccounts, setParsedAccounts] = useState(null);
  const accounts = useSelector((state) => state.accounts.userAccounts);

  useEffect(() => {
    setParsedAccounts(
      accounts.map((account) => {
        return { key: account.CardNo, label: account.CardNo };
      })
    );
    setSelectedAccount(accounts[0].CardNo);
  }, [setSelectedAccount, setParsedAccounts, accounts]);

  const handleChange = (value) => {
    setSelectedAccount(value);
  };

  return (
    <div>
      {parsedAccounts && (
        <div className="AccountSelect_Cont">
          <div>Account:</div>
          <Select defaultValue={parsedAccounts[0].key} onChange={handleChange}>
            {parsedAccounts.map((account) => {
              return <Option value={account.key}>{account.label}</Option>;
            })}
          </Select>
        </div>
      )}
    </div>
  );
}

export default AccountSelect;
