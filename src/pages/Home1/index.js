import React, { useEffect } from "react";
import { ExportJsonCsv } from "react-export-json-csv";
import { useNavigate } from "react-router-dom";
import { postTranslationstrictModefalsetargetLanguagejaJPsourceLanguageenUS } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "hooks/useForm";
import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Input,
  Button,
  TextArea,
} from "components";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

const Home1Page = () => {
  const [apiData, setapiData] = React.useState();
  const [apix, setX] = React.useState();

  const form = useForm({ data: "", srclng: "", trglng: "" });
  const navigate = useNavigate();
  const lngall = [
    { value: "ar-SA", label: "Arabic" },
    { value: "bg-BG", label: "Bulgarian" },
    { value: "id-ID", label: "Indonesian" },
    { value: "fr-FR", label: "French" },
    { value: "ja-JP", label: "Japanese" },
    { value: "hi-IN", label: "Hindi" },
    { value: "en-US", label: "English" },
    { value: "it-IT", label: "Italian" },
    { value: "hu-HU", label: "Hungarian" },
  ];
  var a = [];
  function callApi(data, srclng, trglng, download) {
    const req = {
      data: { data: data },
      params: {
        targetLanguage: trglng?.value ? trglng?.value : trglng,
        sourceLanguage: srclng,
      },
    };

    postTranslationstrictModefalsetargetLanguagejaJPsourceLanguageenUS(req)
      .then((res) => {
        if (download === 1) {
          a.push({
            lng: trglng?.label,
            txt: res,
          });
          setX(a);
        } else {
          setapiData(res);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleNavigate4() {
    navigate("/shipnotice");
  }
  function handleNavigate5() {
    navigate("/vender");
  }

  function handleNavigate10() {
    navigate("/items");
  }
  function handleNavigate11() {
    navigate("/invoices");
  }
  function handleNavigate12() {
    navigate("/orders");
  }
  const headers = [
    {
      key: "lng",
      name: "Languages",
    },
    {
      key: "txt",
      name: "Converted text",
    },
  ];

  function handleDownload() {
    var dwn;
    lngall?.map((lng) => {
      callApi(form?.values?.data, form?.values?.srclng, lng, (dwn = 1));
    });
  }
  return (
    <>
      <Column className="bg-gray_100 font-lato items-center mx-[auto] 2xl:pb-[104px] 3xl:pb-[124px] lg:pb-[80px] xl:pb-[92px] w-[100%]">
        <header className="w-[100%]">
          <Row className="common-pointer bg-gray_900_a2 items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Img
              src="images/img_group.svg"
              className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] w-[10%]"
              alt="Group"
            />
            <Text className="hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_300 w-[auto]">
              Translator
            </Text>
            <Text
              onClick={handleNavigate12}
              className="hover:bg-green_300 cursor-pointer font-lato hover:font-semibold font-semibold hover:justify-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
            >
              Purchase order
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate10}
            >
              Purchase items
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate11}
            >
              Invoices
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate4}
            >
              Ship Notices
            </Text>
            <Text
              className="common-pointer hover:bg-green_300 cursor-pointer font-lato font-medium hover:font-semibold hover:justify-center lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 hover:text-green_300 w-[auto]"
              onClick={handleNavigate5}
            >
              Invite venders
            </Text>
            <Text className="h-8 bg-green_300 cursor-pointer flex font-bold font-inter hover:font-semibold items-center lg:ml-[164px] xl:ml-[188px] 2xl:ml-[212px] 3xl:ml-[254px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius50 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] hover:text-green_300 text-white_A700 tracking-ls1 w-[40px]">
              AP
            </Text>
          </Row>
        </header>

        <Column className="bg-white_A700 items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[20px] 3xl:mt-[60px] lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius12 shadow-bs w-[88%]">
          <Row className="w-[auto] justify-items-center mb-[20px]">
            <Button
              className="common-pointer font-medium mr-[15px] lg:mt-[24px]  lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[auto]"
              onClick={() => {
                form.handleSubmit((e) => {
                  callApi(e?.data, e?.srclng, e?.trglng);
                });
              }}
              size="md"
            >
              Translate
            </Button>
            {apix?.length ? (
              <Button
                className="common-pointer font-medium lg:mt-[24px]  lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[auto]"
                size="md"
                onClick={() => setX([])}
              >
                <ExportJsonCsv headers={headers} items={apix}>
                  Download
                </ExportJsonCsv>
              </Button>
            ) : (
              <Button
                className="common-pointer font-medium lg:mt-[24px]  lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[auto]"
                onClick={() => handleDownload(form?.values)}
                size="md"
              >
                Get data in all languages
              </Button>
            )}
          </Row>
          <Row className="w-[100%]">
            <Column className="items-center rounded-radius6 w-[48%]">
              <SelectBox
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[100%]"
                placeholderClassName="text-bluegray_800"
                name="language"
                isSearchable={false}
                isMulti={false}
                onChange={(e) => {
                  form.handleChange("srclng", e);
                }}
                value={form?.values?.srclng}
              ></SelectBox>
              <TextArea
                className="font-medium h-[32rem] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[23px] lg:text-[15px] xl:text-[20px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-bluegray_600 text-bluegray_600 w-[97%]"
                compid="113:576"
                comptype="EditText"
                name="Entertext"
                onChange={(e) => {
                  form.handleChange("data", e.target.value);
                }}
                value={form?.values?.data}
                placeholder="Enter text here"
                size="sm"
              ></TextArea>
            </Column>
            <Img
              src="images/img_maximize.svg"
              className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[1%]"
              alt="maximize"
            />
            <Column className="items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] rounded-radius6 w-[48%]">
              <SelectBox
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[100%]"
                placeholderClassName="text-bluegray_800"
                name="Dropdown"
                isSearchable={false}
                isMulti={false}
                onChange={(e) => {
                  form.handleChange("trglng", e);
                }}
                value={form?.values?.trglng}
              ></SelectBox>
              <TextArea
                className="font-medium h-[32rem] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[23px] lg:text-[15px] xl:text-[20px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-bluegray_600 text-bluegray_600 w-[97%]"
                compid="113:576"
                comptype="EditText"
                name="Entertext One"
                value={apiData}
                placeholder=""
                size="sm"
              ></TextArea>
            </Column>
          </Row>
        </Column>
      </Column>

      <ToastContainer />
    </>
  );
};

export default Home1Page;
