import React from "react";

import { useNavigate } from "react-router-dom";
import { postVendors } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "hooks/useForm";
import { Column, Row, Img, Text, Input, TextArea, Button } from "components";
import * as yup from "yup";

const VenderPage = () => {
  const [apiData, setapiData] = React.useState();
  const formValidationSchema = yup
    .object()
    .shape({
      companyName: yup.string(),
      welcomeLetterEmail: yup
        .string()
        .required("WelcomeLetterEmail is required")
        .email("Please enter valid email"),
    });

  const form = useForm(
    {
      erpAccount: "",
      companyName: "",
      welcomeLetterEmail: "",
      welcomeLetterMode: "",
    },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );
  const navigate = useNavigate();

  function callApi(data) {
    data = {
      "contactPhoneCountry": "US",
      "companyFaxCountry": "US",
      "vendorId": "vendor-api-07023",
      "companyName": data.companyName,
      "companyPhoneCountry": "US",
      "preferredLanguage": "English",
      "welcomeFaxCountry": "US",
      "welcomeLetterEmail": data.welcomeLetterEmail,
      "welcomeLetterMode": data.welcomeLetterMode,
      "companyAddress": {
        "isoCountryCode": "US",
        "isoStateCode": "CA",
        "street1": "750 lake way",
        "city": "SunnyVale",
        "postalCode": "94086"
      },
      "erpAccount": data.erpAccount,
      "collaborationType": "S4HANA_ProductSourcing",
      "collaborationRole": "Supplier",
      "buyerInfo": {
        "buyerAnid": "AN02001779393"
      }
    }
    const req = { data }
    console.log("data", data);
    postVendors(req)
      .then((res) => {
        setapiData(res);

        toast.success("Email sent successfully");
        form.resetForm();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Some error occured while sending email.");
      });
  }
  function handleNavigate2() {
    navigate("/orders");
  }
  function handleNavigate20() {
    navigate("/");
  }
  function handleNavigate21() {
    navigate("/items");
  }
  function handleNavigate22() {
    navigate("/invoices");
  }
  function handleNavigate23() {
    navigate("/shipnotice");
  }

  return (
    <>
      <Column className="bg-gray_100 font-lato items-center mx-[auto] lg:pb-[180px] xl:pb-[206px] 2xl:pb-[232px] 3xl:pb-[278px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-gray_900_a2 items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Img
              src="images/img_group.svg"
              className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] w-[10%]"
              alt="Group"
            />
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[57px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate20}
            >
              Translator
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato hover:font-semibold font-semibold hover:justify-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate2}
            >
              Purchase order
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate21}
            >
              Purchase items
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate22}
            >
              Invoices
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate23}
            >
              Ship Notices
            </Text>
            <Text className="hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_300 w-[auto]">
              Invite venders
            </Text>
            <Text className="h-8 bg-green_300 cursor-pointer flex font-bold font-inter hover:font-semibold items-center lg:ml-[165px] xl:ml-[189px] 2xl:ml-[213px] 3xl:ml-[255px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius50 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] hover:text-green_300 text-white_A700 tracking-ls1 w-[40px]">
              AP
            </Text>
          </Row>
        </header>
        <Column className="bg-white_A700 items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius12 w-[35%]">
          <Column className="items-center lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius6 w-[100%]">
            <Column className="items-center pt-[3px] rounded-radius6 w-[100%]">
              <Column className="rounded-radius6 w-[100%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  Account ID
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                  wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] w-[100%] xl:mt-[8px]"
                  onChange={(e) => {
                    form.handleChange("erpAccount", e.target.value);
                  }}
                  value={form?.values?.erpAccount}
                  name="Dropdown"
                  placeholder="Account Id"
                ></Input>
              </Column>
              <Column className="lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] rounded-radius6 w-[100%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  Company Name
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                  wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
                  type="text"
                  onChange={(e) => {
                    form.handleChange("companyName", e.target.value);
                  }}
                  errors={form?.errors?.companyName}
                  value={form?.values?.companyName}
                  name="Dropdown One"
                  placeholder="Company Name"
                ></Input>
              </Column>
              <Column className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rounded-radius6 w-[100%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  Email
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                  wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] w-[100%] xl:mt-[8px]"
                  type="email"
                  onChange={(e) => {
                    form.handleChange("welcomeLetterEmail", e.target.value);
                  }}
                  errors={form?.errors?.welcomeLetterEmail}
                  value={form?.values?.welcomeLetterEmail}
                  name="Dropdown Two"
                  placeholder="Email"
                ></Input>
              </Column>
              <Column className="lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] rounded-radius6 w-[100%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  Description
                </Text>
                <TextArea
                  className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                  onChange={(e) => {
                    form.handleChange("welcomeLetterMode", e.target.value);
                  }}
                  value={form?.values?.welcomeLetterMode}
                  name="Dropdown Three"
                  placeholder="Write welcome note here"
                ></TextArea>
              </Column>
            </Column>
            <Button
              className="common-pointer font-medium lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
              onClick={() => {
                form.handleSubmit(callApi);
              }}
            >
              Send
            </Button>
          </Column>
        </Column>
      </Column>

      <ToastContainer />
    </>
  );
};

export default VenderPage;
