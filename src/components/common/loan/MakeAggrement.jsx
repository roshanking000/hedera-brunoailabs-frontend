import React, { Fragment, useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
  Button
} from "@material-tailwind/react";

const Icon = ({ id, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const MakeAggrement = ({
  onClickListNft
}) => {
  const [open, setOpen] = useState(1);

  const [loanAmount, setLoanAmount] = useState("");
  const [borrowerFee, setBorrowerFee] = useState("");
  const [maturityDate, setMaturityDate] = useState("");

  const theme = {
    accordion: {
      styles: {
        base: {
          container: {
            bgColor: "bg-white",
          },
        },
      },
    },
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <div className='step w-full'>
        <div className='sub-title'>Set your loan aggrement terms</div>
        <Accordion theme={theme} className='px-1' open={open === 1} icon={<Icon id={1} open={open} />} >
          <AccordionHeader onClick={() => handleOpen(1)}>
            <span className='text-white'>
              Set Amount
            </span>
          </AccordionHeader>
          <AccordionBody>
            <span className='text-white'>
              What loan amount you are willing to accept?
            </span>
            <Input
              className='text-white'
              variant="outlined"
              label="loan amount"
              value={loanAmount}
              onChange={(e) => {
                const regex = /^[0-9\b]+$/;
                if (e.target.value == "" || regex.test(e.target.value)) {
                  setLoanAmount(e.target.value);
                }
              }}
            />
          </AccordionBody>
        </Accordion>
        <Accordion className='px-1' open={open === 2} icon={<Icon id={2} open={open} />} >
          <AccordionHeader onClick={() => handleOpen(2)}>
            <span className='text-white'>
              Set maturity date
            </span>
          </AccordionHeader>
          <AccordionBody>
            <span className='text-white'>
              Would you like to specify a duration for the loan?
            </span>
            <Input
              className='text-white'
              variant="outlined"
              label="maturity date"
              value={maturityDate}
              onChange={(e) => {
                setMaturityDate(e.target.value);
              }}
            />
          </AccordionBody>
        </Accordion>
        <Accordion className='px-1' open={open === 3} icon={<Icon id={3} open={open} />} >
          <AccordionHeader onClick={() => handleOpen(3)}>
            <span className='text-white'>
              Set APR
            </span>
          </AccordionHeader>
          <AccordionBody>
            <span className='text-white'>
              Would you like to specify an APR for the loan?
            </span>
            <Input
              className='text-white'
              variant="outlined"
              label="APR"
              value={borrowerFee}
              onChange={(e) => {
                setBorrowerFee(e.target.value);
              }}
            />
          </AccordionBody>
        </Accordion>
        <div className='flex flex-row justify-center pt-5'>
          <Button className='btn btn-hollow step-back hidden'>
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17.4367 8.10938H3.72337L11.9312 0.984375C12.0624 0.869531 11.9827 0.65625 11.8093 0.65625H9.73509C9.64368 0.65625 9.55696 0.689062 9.489 0.747656L0.631965 8.43281C0.550844 8.50313 0.485786 8.59006 0.441199 8.68772C0.396611 8.78537 0.373535 8.89147 0.373535 8.99883C0.373535 9.10618 0.396611 9.21228 0.441199 9.30994C0.485786 9.4076 0.550844 9.49453 0.631965 9.56484L9.54056 17.2969C9.57571 17.3273 9.6179 17.3438 9.66243 17.3438H11.807C11.9804 17.3438 12.0601 17.1281 11.9288 17.0156L3.72337 9.89062H17.4367C17.5398 9.89062 17.6242 9.80625 17.6242 9.70312V8.29688C17.6242 8.19375 17.5398 8.10938 17.4367 8.10938Z'
                fill='currentColor'
              ></path>
            </svg>
          </Button>
          <Button
            className='bg-[#cb2b83]'
            disabled={ loanAmount === "" || maturityDate === "" || borrowerFee === "" }
            onClick={() => onClickListNft(loanAmount, borrowerFee, maturityDate)}>
            List this NFT
          </Button>
        </div>
      </div>
    </>
  )
}

export default MakeAggrement
