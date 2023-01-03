import React from "react";

import { Column, Text, Row, Stack, Button } from "components";
import { useNavigate } from "react-router-dom";

const AddExpensePage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] sm:p-[15px] md:p-[33px] p-[49px] w-[100%]">
        <Text
          className="not-italic text-black_900 w-[auto]"
          as="h1"
          variant="h1"
        >
          Money Tracker Application
        </Text>
        <Column className="flex flex-col items-center justify-start max-w-[1101px] sm:mb-[119px] md:mb-[154px] mb-[225px] ml-[auto] mr-[auto] sm:mt-[37px] md:mt-[48px] mt-[70px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
            <Column className="bg-cyan_200 flex flex-col items-center sm:mx-[0] md:p-[13px] sm:p-[15px] p-[20px] sm:w-[100%] w-[33%]">
              <Text
                className="font-normal not-italic text-black_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Total Money
              </Text>
              <Text
                className="font-normal my-[11px] sm:my-[5px] md:my-[7px] not-italic text-purple_500 w-[auto]"
                as="h3"
                variant="h3"
              >
                Rs. 15000
              </Text>
            </Column>
            <Column className="bg-cyan_200 flex flex-col items-center sm:mx-[0] md:p-[13px] sm:p-[15px] p-[20px] sm:w-[100%] w-[33%]">
              <Text
                className="font-normal not-italic text-black_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Remaining Money
              </Text>
              <Text
                className="font-normal my-[11px] sm:my-[5px] md:my-[7px] not-italic text-purple_500 w-[auto]"
                as="h3"
                variant="h3"
              >
                Rs. 7000
              </Text>
            </Column>
          </Row>
          <Column className="flex flex-col justify-start mt-[129px] sm:mt-[68px] md:mt-[88px] w-[100%]">
            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
              <Column className="flex flex-col justify-start ml-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                <Stack className="h-[126px] relative w-[100%]">
                  <Text
                    className="absolute leading-[normal] not-italic text-black_900 top-[13%] w-[100%]"
                    as="h1"
                    variant="h1"
                  >
                    Description Of Expense <br />
                    <br />
                    Money Spent <br />
                    <br />
                    Money Left{" "}
                  </Text>
                  <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[7%] sm:w-[100%] w-[38%]">
                    <div className="bg-bluegray_100 sm:h-[26px] md:h-[34px] h-[48px] w-[100%]"></div>
                    <div className="bg-bluegray_100 sm:h-[29px] md:h-[37px] h-[53px] sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]"></div>
                  </Column>
                </Stack>
                <div className="bg-bluegray_100 sm:h-[27px] md:h-[35px] h-[50px] sm:ml-[259px] md:ml-[335px] ml-[488px] sm:mr-[31px] md:mr-[41px] mr-[60px] sm:mt-[14px] md:mt-[19px] mt-[28px] w-[38%]"></div>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[41px] md:mt-[52px] mt-[77px] w-[100%]">
                <Button
                  className="cursor-pointer font-normal min-w-[16%] not-italic sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center w-[max-content]"
                  size="md"
                >
                  Add
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-normal min-w-[16%] not-italic sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center w-[max-content]"
                  onClick={handleNavigate2}
                  size="xl"
                >
                  Go Back
                </Button>
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default AddExpensePage;
