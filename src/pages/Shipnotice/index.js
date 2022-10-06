import React from "react";
import { ExportJsonCsv } from 'react-export-json-csv';
import { useNavigate } from "react-router-dom";
import { getShipNotices } from "service/api";
import { Column, Row, Img, Text, Button, List, Line } from "components";

const ShipnoticePage = () => {
  const [apiData1, setapiData1] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi1();
  }, []);

  function callApi1() {
    const req = {};

    getShipNotices(req)
      .then((res) => {
        setapiData1(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate18() {
    navigate("/invoices");
  }
  function handleNavigate19() {
    navigate("/vender");
  }
  function handleNavigate26() {
    navigate("/");
  }
  function handleNavigate27() {
    navigate("/orders");
  }
  function handleNavigate28() {
    navigate("/items");
  }
  const newData = apiData1?.map((x) => x); 
  
  const headers = [
    {
      key: 'supplierReference',
      name: 'Supplier Ref ID',
    },
    {
      key: 'carrierName',
      name: 'Courier Name',
    },
    {
      key: 'reasonForShipment',
      name: 'Shipment Reason',
    },
    {
      key: 'trackingNumber',
      name: 'Tracking No',
    },
    {
      key: 'shippingMethod',
      name: 'Shipping Method',
    },
    {
      key: 'trackingDate',
      name: 'Tracking Date',
    },
    {
      key: 'governmentNumber',
      name: 'Government No',
    },
    {
      key: 'customerName',
      name: 'Customer NAme',
    },
    {
      key: 'shipmentType',
      name: 'Shipment Type',
    },
  ]

  let data;
  data = newData?.map((x) => (
    {
      supplierReference: x?.supplierReference,
      carrierName: x?.carrierName,
      reasonForShipment: x?.reasonForShipment,
      trackingNumber: x?.trackingNumber,
      shippingMethod: x?.shippingMethod,
      trackingDate: x?.trackingDate,
      governmentNumber: x?.governmentNumber,
      customerName: x?.customerName,
      shipmentType: x?.shipmentType
    }
  ))
  return (
    <>
      <Column className="bg-gray_100 font-lato items-center mx-[auto] lg:pb-[57px] xl:pb-[65px] 2xl:pb-[74px] 3xl:pb-[88px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-gray_900_a2 items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Img
              src="images/img_group.svg"
              className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] w-[10%]"
              alt="Group"
            />
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center 3xl:ml-[114px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[95px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate26}
            >
              Translator
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato hover:font-semibold font-semibold hover:justify-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate27}
            >
              Purchase order
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate28}
            >
              Purchase items
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate18}
            >
              Invoices
            </Text>
            <Text className="hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_300 w-[auto]">
              Ship Notices
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate19}
            >
              Invite venders
            </Text>
            <Text className="h-8 bg-green_300 cursor-pointer flex font-bold font-inter hover:font-semibold items-center lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius50 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] hover:text-green_300 text-white_A700 tracking-ls1 w-[40px]">
              AP
            </Text>
          </Row>
        </header>
        <Column className="items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[88%]">
          <Row className="justify-between rounded-radius6 w-[100%]">
            <Text className="font-bold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
              Ship Notices
            </Text>
            <Button className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[7%]">
            <ExportJsonCsv headers={headers} items={data}>Export</ExportJsonCsv>

            </Button>
          </Row>
          <Column className="bg-white_A700 items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pb-[14px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[21px] rounded-radius12 w-[100%]">
            <Row className="bg-teal_400 justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[100%]">
              <Text className="font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Supplier Ref.
              </Text>
              <Text className="font-semibold xl:ml-[109px] 2xl:ml-[123px] 3xl:ml-[147px] lg:ml-[95px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Courier Name
              </Text>
              <Text className="font-semibold 2xl:ml-[112px] 3xl:ml-[134px] lg:ml-[87px] xl:ml-[99px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Customer Name
              </Text>
              <Text className="font-semibold 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] 2xl:ml-[94px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Tracking No
              </Text>
              <Text className="font-semibold xl:ml-[113px] 2xl:ml-[128px] 3xl:ml-[153px] lg:ml-[99px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Ship from Street
              </Text>
              <Text className="font-semibold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[16px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Ship to Street
              </Text>
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[90%]"
              orientation="vertical"
            >
              {apiData1?.map((apiData1ResponseEle, index) => {
                return (
                  <React.Fragment key={`apiData1ResponseEle${index}`}>
                    <Row className="items-center justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData1ResponseEle?.supplierReference}
                      </Text>
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData1ResponseEle?.carrierName}
                      </Text>
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData1ResponseEle?.customerName}
                      </Text>
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData1ResponseEle?.trackingNumber}
                      </Text>
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData1ResponseEle?.shipFromStreet}
                      </Text>
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData1ResponseEle?.shipToStreet}
                      </Text>
                    </Row>
                    {index < apiData1?.length - 1 && (
                      <Line className="self-center w-[100%] h-[1px] bg-bluegray_101" />
                    )}
                  </React.Fragment>
                );
              })}
            </List>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ShipnoticePage;
