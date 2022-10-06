import React from "react";
import { ExportJsonCsv } from 'react-export-json-csv';
import { useNavigate } from "react-router-dom";
import { getItems } from "service/api";
import { Column, Row, Img, Text, Button, List, Line } from "components";

const ItemsPage = () => {
  const [apiData3, setapiData3] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi3();
  }, []);

  function callApi3() {
    const req = {};

    getItems(req)
      .then((res) => {
        setapiData3(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate3() {
    navigate("/orders");
  }
  function handleNavigate6() {
    navigate("/invoices");
  }
  function handleNavigate7() {
    navigate("/shipnotice");
  }
  function handleNavigate8() {
    navigate("/vender");
  }
  function handleNavigate17() {
    navigate("/");
  }
  const newData = apiData3?.content.map((x) => x); 
  
  const headers = [
    {
      key: 'documentNumber',
      name: 'Doc No',
    },
    {
      key: 'manufacturerPartId',
      name: 'Manufacturer Id',
    },
    {
      key: 'description',
      name: 'Description',
    },
    {
      key: 'category',
      name: 'Category',
    },
    {
      key: 'quantity',
      name: 'Quantity',
    },
    {
      key: 'unitPrice',
      name: 'unit Price',
    },
    {
      key: 'itemShipToName',
      name: 'Item',
    },
    {
      key: 'itemShipToCountry',
      name: 'Item ship country',
    },
    {
      key: 'itemShipToPostalCode',
      name: 'Zipcode',
    },
  ]

  let data;
  data = newData?.map((x) => (
    {
      documentNumber: x?.documentNumber,
      manufacturerPartId: x?.manufacturerPartId,
      description: x?.description,
      category: x?.category,
      unitPrice: x?.unitPrice?.amount,
      quantity: x?.quantity,
      itemShipToName: x?.itemShipToName,
      itemShipToCountry: x?.itemShipToCountry,
      itemShipToPostalCode: x?.itemShipToPostalCode
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
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center 2xl:ml-[112px] 3xl:ml-[134px] lg:ml-[87px] xl:ml-[99px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate17}
            >
              Translator
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato hover:font-semibold font-semibold hover:justify-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate3}
            >
              Purchase order
            </Text>
            <Text className="hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_300 w-[auto]">
              Purchase items
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate6}
            >
              Invoices
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate7}
            >
              Ship Notices
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate8}
            >
              Invite venders
            </Text>
            <Text className="h-8 bg-green_300 cursor-pointer flex font-bold font-inter hover:font-semibold items-center lg:ml-[136px] xl:ml-[155px] 2xl:ml-[175px] 3xl:ml-[210px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius50 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] hover:text-green_300 text-white_A700 tracking-ls1 w-[40px]">
              AP
            </Text>
          </Row>
        </header>
        <Column className="items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[88%]">
          <Row className="items-center justify-between rounded-radius6 w-[100%]">
            <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
              Purchase Items
            </Text>
            <Button className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[7%]">
            <ExportJsonCsv headers={headers} items={data}>Export</ExportJsonCsv>

            </Button>
          </Row>
          <Column className="bg-white_A700 items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pb-[14px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[21px] rounded-radius12 w-[100%]">
            <Row className="bg-teal_400 justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[100%]">
              <Text className="font-semibold mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Document No
              </Text>
              <Text className="font-semibold 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Ship Item
              </Text>
              <Text className="font-semibold lg:ml-[115px] xl:ml-[131px] 2xl:ml-[148px] 3xl:ml-[177px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Description
              </Text>
              <Text className="font-semibold lg:ml-[101px] xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Ship Country
              </Text>
              <Text className="font-semibold xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[92px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Street
              </Text>
              <Text className="font-semibold lg:ml-[136px] xl:ml-[155px] 2xl:ml-[175px] 3xl:ml-[210px] lg:mr-[13px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Category
              </Text>
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[90%]"
              orientation="vertical"
            >
              {apiData3?.content?.map((apiData3ContentEle, index) => {
                return (
                  <React.Fragment key={`apiData3ContentEle${index}`}>
                    <Row className="items-center justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData3ContentEle?.documentNumber}
                      </Text>
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData3ContentEle?.itemShipToName}
                      </Text>
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData3ContentEle?.description}
                      </Text>
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData3ContentEle?.itemShipToCountry}
                      </Text>
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData3ContentEle?.itemShipToStreet}
                      </Text>
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                        {apiData3ContentEle?.category}
                      </Text>
                    </Row>
                    {index < apiData3?.content?.length - 1 && (
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

export default ItemsPage;
