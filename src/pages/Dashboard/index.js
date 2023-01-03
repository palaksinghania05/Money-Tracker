import React from "react";

import { Column, Text, Row, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/deleteexpense");
  }
  function handleNavigate3() {
    navigate("/addexpense");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-end mx-[auto] sm:p-[15px] md:p-[22px] p-[32px] w-[100%]">
        <Column className="flex flex-col items-center justify-start max-w-[1104px] ml-[auto] mr-[auto] mt-[4px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Text
            className="not-italic text-black_900 w-[auto]"
            as="h1"
            variant="h1"
          >
            Money Tracker Application
          </Text>
          <Column className="flex flex-col items-center justify-start sm:mt-[18px] md:mt-[23px] mt-[33px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
              <Column className="bg-cyan_200 flex flex-col items-center sm:mx-[0] md:p-[14px] sm:p-[15px] p-[20px] sm:w-[100%] w-[33%]">
                <Text
                  className="font-normal not-italic text-black_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Total Money
                </Text>
                <Text
                  className="font-normal my-[11px] sm:my-[6px] md:my-[7px] not-italic text-purple_500 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Rs. 15000
                </Text>
              </Column>
              <Column className="bg-cyan_200 flex flex-col items-center sm:mx-[0] md:p-[14px] sm:p-[15px] p-[20px] sm:w-[100%] w-[33%]">
                <Text
                  className="font-normal not-italic text-black_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Remaining Money
                </Text>
                <Text
                  className="font-normal my-[11px] sm:my-[6px] md:my-[7px] not-italic text-purple_500 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Rs. 7000
                </Text>
              </Column>
            </Row>
            <Column className="flex flex-col justify-start sm:mt-[23px] md:mt-[30px] mt-[42px] w-[100%]">
              <Text className="text-black_900 w-[auto]" as="h2" variant="h2">
                Expense List:
              </Text>
              <Input
                className="font-medium p-[0] text-[20px] placeholder:text-black_900 text-black_900 w-[100%]"
                wrapClassName="md:mt-[21px] mt-[30px] sm:mt-[16px] w-[100%]"
                name="language"
                placeholder="S.No.                                 Description                                                     Expense                                        Money Left"
                variant="FillBluegray100"
              ></Input>
              <Input
                className="font-medium p-[0] text-[20px] placeholder:text-black_900 text-black_900 w-[100%]"
                wrapClassName="md:mt-[10px] mt-[15px] sm:mt-[8px] w-[100%]"
                name="language One"
                placeholder="1.                                             Milk                                                             Rs. 1500                                         Rs. 13500"
                size="md"
              ></Input>
              <Input
                className="font-medium p-[0] text-[20px] placeholder:text-black_900 text-black_900 w-[100%]"
                wrapClassName="md:mt-[10px] mt-[15px] sm:mt-[8px] w-[100%]"
                name="language Two"
                placeholder="2.                                       Vegetables                                                      Rs. 1000                                         Rs. 12500"
              ></Input>
              <Input
                className="font-medium p-[0] text-[20px] placeholder:text-black_900 text-black_900 w-[100%]"
                wrapClassName="md:mt-[15px] mt-[22px] sm:mt-[12px] w-[100%]"
                name="language Three"
                placeholder="3.                                      Car Servicing                                                   Rs. 4000                                         Rs. 8500"
              ></Input>
              <Input
                className="font-medium p-[0] text-[20px] placeholder:text-black_900 text-black_900 w-[100%]"
                wrapClassName="md:mt-[14px] mt-[20px] sm:mt-[11px] w-[100%]"
                name="language Four"
                placeholder="4.                                           Fruits                                                             Rs. 500                                           Rs. 8000"
                size="md"
              ></Input>
              <Input
                className="font-medium p-[0] text-[20px] placeholder:text-black_900 text-black_900 w-[100%]"
                wrapClassName="md:mt-[10px] mt-[15px] sm:mt-[8px] w-[100%]"
                name="language Five"
                placeholder="5.                                       Maid Salary                                                      Rs. 1000                                          Rs. 7000"
              ></Input>
            </Column>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[28px] sm:px-[0] w-[100%]">
              <Button
                className="common-pointer cursor-pointer font-semibold min-w-[19%] text-[20px] text-black_900 text-center w-[max-content]"
                onClick={handleNavigate3}
                size="lg"
                variant="FillGreen800"
              >
                Add Expense
              </Button>
              <Button
                className="common-pointer cursor-pointer font-semibold min-w-[19%] text-[20px] text-black_900 text-center w-[max-content]"
                onClick={handleNavigate}
                variant="FillRed700"
              >
                Remove Expense
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default DashboardPage;
