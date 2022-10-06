import React from "react";
import { ExportJsonCsv } from 'react-export-json-csv';
import { useNavigate } from "react-router-dom";
import { getInvoices } from "service/api";
import { Column, Row, Img, Text, Button, List, Line } from "components";

const InvoicesPage = () => {
  const [apiData2, setapiData2] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi2();
  }, []);

  function callApi2() {
    const req = {};

    getInvoices(req)
      .then((res) => {
        setapiData2(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate1() {
    navigate("/orders");
  }
  function handleNavigate24() {
    navigate("/shipnotice");
  }
  function handleNavigate25() {
    navigate("/vender");
  }
  function handleNavigate29() {
    navigate("/");
  }
  function handleNavigate30() {
    navigate("/items");
  }
  const newData = apiData2?.content.map((x) => x); 
  
  const headers = [
    {
      key: 'documentNumber',
      name: 'Doc No',
    },
    {
      key: 'supplierANID',
      name: 'Supplier ID',
    },
    {
      key: 'buyerANID',
      name: 'Buyer ID',
    },
    {
      key: 'documentStatusComments',
      name: 'Invoice Comment',
    },
    {
      key: 'externalOrderNumber',
      name: 'External order No',
    },
    {
      key: 'numberOfItems',
      name: 'No of Items',
    },
    {
      key: 'totalAmount',
      name: 'Total Amount',
    },
    {
      key: 'type',
      name: 'Type',
    },
    {
      key: 'payloadId',
      name: 'Payload ID',
    },
  ]

  let data;
  data = newData?.map((x) => (
    {
      documentNumber: x?.documentNumber,
      supplierANID: x?.supplierANID,
      buyerANID: x?.buyerANID,
      documentStatusComments: x?.documentStatusComments,
      totalAmount: x?.totalAmount?.amount,
      externalOrderNumber: x?.externalOrderNumber,
      numberOfItems: x?.numberOfItems,
      type: x?.type,
      payloadId: x?.payloadId
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
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate29}
            >
              Translator
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato hover:font-semibold font-semibold hover:justify-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate1}
            >
              Purchase order
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate30}
            >
              Purchase items
            </Text>
            <Text className="hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_300 w-[auto]">
              Invoices
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate24}
            >
              Ship Notices
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate25}
            >
              Invite venders
            </Text>
            <Text className="h-8 bg-green_300 cursor-pointer flex font-bold font-inter hover:font-semibold items-center lg:ml-[157px] xl:ml-[180px] 2xl:ml-[203px] 3xl:ml-[243px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius50 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] hover:text-green_300 text-white_A700 tracking-ls1 w-[40px]">
              AP
            </Text>
          </Row>
        </header>
        <Column className="items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[88%]">
          <Row className="items-center justify-between rounded-radius6 w-[100%]">
            <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
              Invoices
            </Text>
            <Button className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[7%]">
            <ExportJsonCsv headers={headers} items={data}>Export</ExportJsonCsv>

            </Button>
          </Row>
          <Column className="bg-white_A700 items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pb-[14px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[21px] rounded-radius12 w-[100%]">
            <Row className="bg-teal_400 justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[100%]">
              <Text className="font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Supplier ANID
              </Text>
              <Text className="font-semibold 2xl:ml-[109px] 3xl:ml-[130px] lg:ml-[84px] xl:ml-[96px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Purpose
              </Text>
              <Text className="font-semibold lg:ml-[122px] xl:ml-[139px] 2xl:ml-[157px] 3xl:ml-[188px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                External order No
              </Text>
              <Text className="font-semibold lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Comments
              </Text>
              <Text className="font-semibold lg:ml-[106px] xl:ml-[121px] 2xl:ml-[137px] 3xl:ml-[164px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Routing Status
              </Text>
              <Text className="font-semibold 2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] mr-[4px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Created At
              </Text>
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[90%]"
              orientation="vertical"
            >
              {apiData2?.content?.map((apiData2ContentEle, index) => {
                return (
                  <React.Fragment key={`apiData2ContentEle${index}`}>
                    <Row className="items-center justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData2ContentEle?.supplierANID}
                      </Text>
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData2ContentEle?.purpose}
                      </Text>
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData2ContentEle?.externalOrderNumber}
                      </Text>
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData2ContentEle?.documentStatusComments}
                      </Text>
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData2ContentEle?.routingStatus}
                      </Text>
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData2ContentEle?.createdDate}
                      </Text>
                    </Row>
                    {index < apiData2?.content?.length - 1 && (
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

export default InvoicesPage;
