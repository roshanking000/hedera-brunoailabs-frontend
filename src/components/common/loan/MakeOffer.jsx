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

const MakeOffer = ({
  onClickSendOffer
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
        <div className='sub-title'>Set your loan offer terms</div>
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
            disabled={loanAmount === "" || maturityDate === "" || borrowerFee === ""}
            onClick={() => onClickSendOffer(loanAmount, borrowerFee, maturityDate)}>
            Make offer
          </Button>
        </div>
      </div>
    </>
  )
}

export default MakeOffer

/**

import React from 'react'

const MakeOffer = () => {
  return (
    <>
      <div className='step'>
        <div className='sub-title'>Set your loan offer terms</div>
        <div className='asset-terms-form'>
          <div className='copy-terms'>
            <span className='toggle-switch'>
              <label className='switch'>
                <input id='toggle-switch-undefined' type='checkbox' />
                <span className='slider round'></span>
              </label>
              <label className='label' htmlFor='toggle-switch-undefined'>
                Set to borrower&apos;s desired terms
              </label>
            </span>
          </div>
          <div className='collapse-panels '>
            <div className='term-collapse-panel expanded lend'>
              <div className='title accent-color-background'>
                <div>
                  <span>
                    The loan must be in <b>wETH</b>
                  </span>
                </div>
                <svg
                  width='12px'
                  height='7px'
                  viewBox='0 0 12 7'
                  xmlns='http://www.w3.org/2000/svg'
                  className='chevron null'
                >
                  <title>Fill 1</title>
                  <g
                    id='chevron'
                    stroke='none'
                    strokeWidth='1'
                    fill='none'
                    fillRule='evenodd'
                  >
                    <g
                      transform='translate(-294.000000, -3646.000000)'
                      fill='currentColor'
                      id='Fill-1'
                    >
                      <polygon
                        transform='translate(300.000000, 3649.500000) rotate(-180.000000) translate(-300.000000, -3649.500000) '
                        points='299.999919 3647.63284 305.207774 3653 306 3652.18354 300 3646 294 3652.18354 294.792226 3653'
                      ></polygon>
                    </g>
                  </g>
                </svg>
              </div>
              <div className='collapse-content'>
                <div className='content'>
                  <div className='form'>
                    <div className='question'>
                      In which currency are you willing to accept loans?
                    </div>
                    <div className='radio-buttons'>
                      <label className='accent-color radio-button'>
                        <input
                          type='radio'
                          name='currency'
                          data-currency='wETH'
                          checked=''
                        />
                        <span>wETH</span>
                      </label>
                      <label className='accent-color radio-button'>
                        <input type='radio' name='currency' data-currency='DAI' />
                        <span>DAI</span>
                      </label>
                      <label className='accent-color radio-button'>
                        <input type='radio' name='currency' data-currency='USDC' />
                        <span>USDC</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='term-collapse-panel  lend'>
              <div className='title accent-color-background'>
                <div>
                  <span>Set amount</span>
                </div>
                <svg
                  width='12px'
                  height='7px'
                  viewBox='0 0 12 7'
                  xmlns='http://www.w3.org/2000/svg'
                  className='chevron null'
                >
                  <title>Fill 1</title>
                  <g
                    id='chevron'
                    stroke='none'
                    strokeWidth='1'
                    fill='none'
                    fillRule='evenodd'
                  >
                    <g
                      transform='translate(-294.000000, -3646.000000)'
                      fill='currentColor'
                      id='Fill-1'
                    >
                      <polygon
                        transform='translate(300.000000, 3649.500000) rotate(-180.000000) translate(-300.000000, -3649.500000) '
                        points='299.999919 3647.63284 305.207774 3653 306 3652.18354 300 3646 294 3652.18354 294.792226 3653'
                      ></polygon>
                    </g>
                  </g>
                </svg>
              </div>
              <div className='collapse-content'>
                <div className='content'>
                  <div className='form'>
                    <div className='question'>
                      What loan amount you are willing to accept?
                    </div>
                    <div className='accent-color  amount-field'>
                      <svg
                        width='19'
                        height='19'
                        viewBox='0 0 19 19'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='currency-icon'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M9.33337 1.625C13.683 1.625 17.2084 5.15107 17.2084 9.5C17.2084 13.8496 13.683 17.375 9.33337 17.375C4.98444 17.375 1.45837 13.8493 1.45837 9.5C1.45837 5.15107 4.98444 1.625 9.33337 1.625ZM4.7704 12.5L3.33337 7.25H4.25372L5.36782 11.4546H5.40819L6.62724 7.25H7.57988L8.81507 11.4546H8.86351L9.9211 7.25H10.8334L9.39634 12.5H8.28224L7.10356 8.52435H7.07126L5.8845 12.5H4.7704ZM14.5834 7.25H11.5834V8H14.5834V7.25ZM12.3334 9.5H13.8334V10.25H12.3334V9.5ZM14.5834 11.75H11.5834V12.5H14.5834V11.75Z'
                          fill='#CBC9E4'
                        ></path>
                      </svg>
                      <input
                        aria-label='wETH'
                        type='text'
                        inputMode='decimal'
                        maxLength='8'
                        value=''
                      />
                      <svg
                        width='18px'
                        height='18px'
                        viewBox='0 0 18 18'
                        xmlns='http://www.w3.org/2000/svg'
                        className='cancel-icon link-color'
                      >
                        <path
                          fill='currentColor'
                          d='M9,0 C4.03647429,0 0,4.03713 0,9 C0,13.9628571 4.03713,18 9,18 C13.9628571,18 18,13.9628571 18,9 C18,4.03713 13.9628571,0 9,0 Z M9,16.1994857 C5.03026714,16.1994857 1.80051429,12.9697714 1.80051429,9 C1.80051429,5.03026714 5.03026714,1.80051429 9,1.80051429 C12.9697714,1.80051429 16.1994857,5.03026714 16.1994857,9 C16.1994857,12.9697714 12.9697714,16.1994857 9,16.1994857 Z M13.2363,6.03592714 L10.2722014,9 L13.2363,11.9640857 L11.9639571,13.2364286 L8.99987143,10.27233 L6.03579857,13.2364286 L4.76346857,11.9640857 L7.72668,9 L4.76260714,6.03592714 L6.03493714,4.76359714 L8.99987143,7.72767 L11.9639571,4.76359714 L13.2363,6.03592714 Z'
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='term-collapse-panel  lend'>
              <div className='title accent-color-background'>
                <div>
                  <span>Set loan duration</span>
                </div>
                <svg
                  width='12px'
                  height='7px'
                  viewBox='0 0 12 7'
                  xmlns='http://www.w3.org/2000/svg'
                  className='chevron null'
                >
                  <title>Fill 1</title>
                  <g
                    id='chevron'
                    stroke='none'
                    strokeWidth='1'
                    fill='none'
                    fillRule='evenodd'
                  >
                    <g
                      transform='translate(-294.000000, -3646.000000)'
                      fill='currentColor'
                      id='Fill-1'
                    >
                      <polygon
                        transform='translate(300.000000, 3649.500000) rotate(-180.000000) translate(-300.000000, -3649.500000) '
                        points='299.999919 3647.63284 305.207774 3653 306 3652.18354 300 3646 294 3652.18354 294.792226 3653'
                      ></polygon>
                    </g>
                  </g>
                </svg>
              </div>
              <div className='collapse-content'>
                <div className='content'>
                  <div className='form'>
                    <div className='question'>
                      Would you like to specify a duration for the loan?
                    </div>
                    <div className='inline'>
                      <div className='react-select period-select select-field css-2b097c-container'>
                        <span
                          aria-live='polite'
                          aria-atomic='false'
                          aria-relevant='additions text'
                          className='css-7pg0cj-a11yText'
                        ></span>
                        <div className='react-select__control css-yk16xz-control'>
                          <div className='react-select__value-container css-1hwfws3'>
                            <div className='react-select__placeholder css-1wa3eu0-placeholder'>
                              Any
                            </div>
                            <div className='css-1g6gooi'>
                              <div
                                className='react-select__input'
                                style='display: inline-block;'
                              >
                                <input
                                  autoCapitalize='none'
                                  autoComplete='off'
                                  autoCorrect='off'
                                  id='react-select-2-input'
                                  spellCheck='false'
                                  type='text'
                                  value=''
                                  style='box-sizing: content-box; width: 2px; background: 0px center; border: 0px; font-size: inherit; opacity: 1; outline: 0px; padding: 0px; color: inherit;'
                                />
                                <div style='position: absolute; top: 0px; left: 0px; visibility: hidden; height: 0px; overflow: scroll; white-space: pre; font-size: 12px; font-family: Arial; font-weight: 400; font-style: normal; letter-spacing: normal; text-transform: none;'></div>
                              </div>
                            </div>
                          </div>
                          <div className='react-select__indicators css-1wy0on6'>
                            <span className='react-select__indicator-separator css-1okebmr-indicatorSeparator'></span>
                            <div
                              className='react-select__indicator react-select__dropdown-indicator css-tlfecz-indicatorContainer'
                              aria-hidden='true'
                            >
                              <svg
                                width='12px'
                                height='7px'
                                viewBox='0 0 12 7'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <title>Fill 1</title>
                                <g
                                  id='chevron'
                                  stroke='none'
                                  strokeWidth='1'
                                  fill='none'
                                  fillRule='evenodd'
                                >
                                  <g
                                    transform='translate(-294.000000, -3646.000000)'
                                    fill='currentColor'
                                    id='Fill-1'
                                  >
                                    <polygon
                                      transform='translate(300.000000, 3649.500000) rotate(-180.000000) translate(-300.000000, -3649.500000) '
                                      points='299.999919 3647.63284 305.207774 3653 306 3652.18354 300 3646 294 3652.18354 294.792226 3653'
                                    ></polygon>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='term-collapse-panel  lend'>
              <div className='title accent-color-background'>
                <div>
                  <span>Set APR</span>
                </div>
                <svg
                  width='12px'
                  height='7px'
                  viewBox='0 0 12 7'
                  xmlns='http://www.w3.org/2000/svg'
                  className='chevron null'
                >
                  <title>Fill 1</title>
                  <g
                    id='chevron'
                    stroke='none'
                    strokeWidth='1'
                    fill='none'
                    fillRule='evenodd'
                  >
                    <g
                      transform='translate(-294.000000, -3646.000000)'
                      fill='currentColor'
                      id='Fill-1'
                    >
                      <polygon
                        transform='translate(300.000000, 3649.500000) rotate(-180.000000) translate(-300.000000, -3649.500000) '
                        points='299.999919 3647.63284 305.207774 3653 306 3652.18354 300 3646 294 3652.18354 294.792226 3653'
                      ></polygon>
                    </g>
                  </g>
                </svg>
              </div>
              <div className='collapse-content'>
                <div className='content'>
                  <div className='form'>
                    <div className='question'>
                      Would you like to specify an APR for the loan?
                    </div>
                    <div className='inline'>
                      <div className='accent-color repayment-amount  amount-field'>
                        <svg
                          width='19'
                          height='19'
                          viewBox='0 0 19 19'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='currency-icon'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.33337 1.625C13.683 1.625 17.2084 5.15107 17.2084 9.5C17.2084 13.8496 13.683 17.375 9.33337 17.375C4.98444 17.375 1.45837 13.8493 1.45837 9.5C1.45837 5.15107 4.98444 1.625 9.33337 1.625ZM4.7704 12.5L3.33337 7.25H4.25372L5.36782 11.4546H5.40819L6.62724 7.25H7.57988L8.81507 11.4546H8.86351L9.9211 7.25H10.8334L9.39634 12.5H8.28224L7.10356 8.52435H7.07126L5.8845 12.5H4.7704ZM14.5834 7.25H11.5834V8H14.5834V7.25ZM12.3334 9.5H13.8334V10.25H12.3334V9.5ZM14.5834 11.75H11.5834V12.5H14.5834V11.75Z'
                            fill='#CBC9E4'
                          ></path>
                        </svg>
                        <input
                          aria-label='Final Repayment'
                          type='text'
                          inputMode='decimal'
                          maxLength='8'
                          value=''
                        />

                        <svg
                          width='18px'
                          height='18px'
                          viewBox='0 0 18 18'
                          xmlns='http://www.w3.org/2000/svg'
                          className='cancel-icon link-color'
                        >
                          <path
                            fill='currentColor'
                            d='M9,0 C4.03647429,0 0,4.03713 0,9 C0,13.9628571 4.03713,18 9,18 C13.9628571,18 18,13.9628571 18,9 C18,4.03713 13.9628571,0 9,0 Z M9,16.1994857 C5.03026714,16.1994857 1.80051429,12.9697714 1.80051429,9 C1.80051429,5.03026714 5.03026714,1.80051429 9,1.80051429 C12.9697714,1.80051429 16.1994857,5.03026714 16.1994857,9 C16.1994857,12.9697714 12.9697714,16.1994857 9,16.1994857 Z M13.2363,6.03592714 L10.2722014,9 L13.2363,11.9640857 L11.9639571,13.2364286 L8.99987143,10.27233 L6.03579857,13.2364286 L4.76346857,11.9640857 L7.72668,9 L4.76260714,6.03592714 L6.03493714,4.76359714 L8.99987143,7.72767 L11.9639571,4.76359714 L13.2363,6.03592714 Z'
                          ></path>
                        </svg>
                      </div>
                      <div className='accent-color apr-amount  amount-field'>
                        <div className='currency-icon'>&nbsp;%</div>
                        <input
                          aria-label='APR'
                          type='text'
                          inputMode='decimal'
                          maxLength='8'
                          value=''
                        />
                        <svg
                          width='18px'
                          height='18px'
                          viewBox='0 0 18 18'
                          xmlns='http://www.w3.org/2000/svg'
                          className='cancel-icon link-color'
                        >
                          <path
                            fill='currentColor'
                            d='M9,0 C4.03647429,0 0,4.03713 0,9 C0,13.9628571 4.03713,18 9,18 C13.9628571,18 18,13.9628571 18,9 C18,4.03713 13.9628571,0 9,0 Z M9,16.1994857 C5.03026714,16.1994857 1.80051429,12.9697714 1.80051429,9 C1.80051429,5.03026714 5.03026714,1.80051429 9,1.80051429 C12.9697714,1.80051429 16.1994857,5.03026714 16.1994857,9 C16.1994857,12.9697714 12.9697714,16.1994857 9,16.1994857 Z M13.2363,6.03592714 L10.2722014,9 L13.2363,11.9640857 L11.9639571,13.2364286 L8.99987143,10.27233 L6.03579857,13.2364286 L4.76346857,11.9640857 L7.72668,9 L4.76260714,6.03592714 L6.03493714,4.76359714 L8.99987143,7.72767 L11.9639571,4.76359714 L13.2363,6.03592714 Z'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='term-collapse-panel  lend'>
              <div className='title accent-color-background'>
                <div>
                  <span>
                    Offer expiration: <b>7 days</b>
                  </span>
                </div>
                <svg
                  width='12px'
                  height='7px'
                  viewBox='0 0 12 7'
                  xmlns='http://www.w3.org/2000/svg'
                  className='chevron null'
                >
                  <title>Fill 1</title>
                  <g
                    id='chevron'
                    stroke='none'
                    strokeWidth='1'
                    fill='none'
                    fillRule='evenodd'
                  >
                    <g
                      transform='translate(-294.000000, -3646.000000)'
                      fill='currentColor'
                      id='Fill-1'
                    >
                      <polygon
                        transform='translate(300.000000, 3649.500000) rotate(-180.000000) translate(-300.000000, -3649.500000) '
                        points='299.999919 3647.63284 305.207774 3653 306 3652.18354 300 3646 294 3652.18354 294.792226 3653'
                      ></polygon>
                    </g>
                  </g>
                </svg>
              </div>
              <div className='collapse-content'>
                <div className='content'>
                  <div className='form'>
                    <div className='question'>
                      Would you like to specify an expiration for this offer?
                    </div>
                    <div className='inline'>
                      <div className='react-select period-select select-field css-2b097c-container'>
                        <span
                          aria-live='polite'
                          aria-atomic='false'
                          aria-relevant='additions text'
                          className='css-7pg0cj-a11yText'
                        ></span>
                        <div className='react-select__control css-yk16xz-control'>
                          <div className='react-select__value-container react-select__value-container--has-value css-1hwfws3'>
                            <div className='react-select__single-value css-1uccc91-singleValue'>
                              7 Days
                            </div>
                            <div className='css-1g6gooi'>
                              <div
                                className='react-select__input'
                                style='display: inline-block;'
                              >
                                <input
                                  autoCapitalize='none'
                                  autoComplete='off'
                                  autoCorrect='off'
                                  id='react-select-3-input'
                                  spellCheck='false'
                                  type='text'
                                  value=''
                                  style='box-sizing: content-box; width: 2px; background: 0px center; border: 0px; font-size: inherit; opacity: 1; outline: 0px; padding: 0px; color: inherit;'
                                />
                                <div style='position: absolute; top: 0px; left: 0px; visibility: hidden; height: 0px; overflow: scroll; white-space: pre; font-size: 12px; font-family: Arial; font-weight: 400; font-style: normal; letter-spacing: normal; text-transform: none;'></div>
                              </div>
                            </div>
                          </div>
                          <div className='react-select__indicators css-1wy0on6'>
                            <div
                              className='react-select__indicator react-select__clear-indicator css-tlfecz-indicatorContainer'
                              aria-hidden='true'
                            >
                              <svg
                                width='18px'
                                height='18px'
                                viewBox='0 0 18 18'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill='currentColor'
                                  d='M9,0 C4.03647429,0 0,4.03713 0,9 C0,13.9628571 4.03713,18 9,18 C13.9628571,18 18,13.9628571 18,9 C18,4.03713 13.9628571,0 9,0 Z M9,16.1994857 C5.03026714,16.1994857 1.80051429,12.9697714 1.80051429,9 C1.80051429,5.03026714 5.03026714,1.80051429 9,1.80051429 C12.9697714,1.80051429 16.1994857,5.03026714 16.1994857,9 C16.1994857,12.9697714 12.9697714,16.1994857 9,16.1994857 Z M13.2363,6.03592714 L10.2722014,9 L13.2363,11.9640857 L11.9639571,13.2364286 L8.99987143,10.27233 L6.03579857,13.2364286 L4.76346857,11.9640857 L7.72668,9 L4.76260714,6.03592714 L6.03493714,4.76359714 L8.99987143,7.72767 L11.9639571,4.76359714 L13.2363,6.03592714 Z'
                                ></path>
                              </svg>
                            </div>
                            <span className='react-select__indicator-separator css-1okebmr-indicatorSeparator'></span>
                            <div
                              className='react-select__indicator react-select__dropdown-indicator css-tlfecz-indicatorContainer'
                              aria-hidden='true'
                            >
                              <svg
                                width='12px'
                                height='7px'
                                viewBox='0 0 12 7'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <title>Fill 1</title>
                                <g
                                  id='chevron'
                                  stroke='none'
                                  strokeWidth='1'
                                  fill='none'
                                  fillRule='evenodd'
                                >
                                  <g
                                    transform='translate(-294.000000, -3646.000000)'
                                    fill='currentColor'
                                    id='Fill-1'
                                  >
                                    <polygon
                                      transform='translate(300.000000, 3649.500000) rotate(-180.000000) translate(-300.000000, -3649.500000) '
                                      points='299.999919 3647.63284 305.207774 3653 306 3652.18354 300 3646 294 3652.18354 294.792226 3653'
                                    ></polygon>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='buttons'>
            <button id='make-offer-button-cancel' className='btn btn-hollow step-back'>
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
            </button>
            <button id='make-offer-button-2' className='btn' disabled=''>
              Make loan aggrement
            </button>
          </div>
        </div>
      </div>
      <div className='step'>
        <div className='sub-title'>Please sign the transaction</div>
        <div className='explainer'>
          <div>
            Please click sign to show your wallet popup and confirm the transaction.
          </div>
          <div className='terms'>
            By signing this transaction you agree to our
            <a
              className='link link-color'
              href='https://nftfi.com/terms-and-conditions/'
              target='_blank'
              rel='noreferrer'
            >
              Terms of service
            </a>{' '}
            and{' '}
            <a
              className='link link-color'
              href='https://nftfi.com/terms-of-use/'
              target='_blank'
              rel='noreferrer'
            >
              Terms of use
            </a>
            .
          </div>
        </div>
        <div className='buttons'>
          <button id='make-offer-button-back' className='btn btn-hollow step-back'>
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
          </button>
          <button id='make-offer-button-sign' className='btn'>
            Sign
          </button>
        </div>
      </div>
      <div className='step email-container'>
        <div className='sub-title'>Enter your email</div>
        <div>Enter your email so we can let you know if your offer is accepted.</div>
        <form>
          <label>Email*</label>
          <input
            type='email'
            id='email'
            autoCapitalize='off'
            autoCorrect='off'
            autoComplete='off'
            maxLength='65'
            value=''
          />
        </form>
        <div className='buttons'>
          <button id='email-form-nothanks' className='btn btn-hollow step-back'>
            No thanks!
          </button>
          <button id='email-form-save' className='btn' disabled>
            Save
          </button>
        </div>
      </div>
    </>
  )
}

export default MakeOffer

 */