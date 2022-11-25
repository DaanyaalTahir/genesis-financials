import React, { useState, useEffect } from "react";
import { Badge, Descriptions } from "antd";
import { getContactInfo } from "../../api/contact";
import { useSelector } from "react-redux";

const ContactPage = () => {
  const [contactInfo, setContactInfo] = useState(undefined);
  const branchNo = useSelector((state) => state.user.HomeBranch);

  useEffect(() => {
    async function getData() {
      let res = await getContactInfo({ branchNo });
      setContactInfo(res.data[0]);
    }
    getData();
  }, []);

  return (
    <div className="gf_general_page">
      {contactInfo && (
        <Descriptions
          title="Contact Info"
          bordered
          column={1}
          style={{ maxWidth: "600px" }}
        >
          <Descriptions.Item label="Manager Name">
            {contactInfo.ManagerName}
          </Descriptions.Item>
          <Descriptions.Item label="Phone">
            <a href={contactInfo.Phone}>{contactInfo.Phone}</a>
          </Descriptions.Item>
          <Descriptions.Item label="Fax">
            <a href={contactInfo.Fax}>{contactInfo.Fax}</a>
          </Descriptions.Item>
          <Descriptions.Item label="Address">
            {`${contactInfo.Street}, ${contactInfo.City}, ${contactInfo.Province},  ${contactInfo.PostalCode}, ${contactInfo.Country} `}
          </Descriptions.Item>
        </Descriptions>
      )}
    </div>
  );
};

export default ContactPage;
