import React from 'react';
import "./HandBookList.css";
import telecoms from "./images/telecoms.jpg";
import banks from "./images/banks.jpg";
import driver from "./images/driver.jpg";

function HandBookList({state}) {
  return (
    <div class="container my-24 px-6 p-3 mx-auto">
      
    <section class="mb-32 text-gray-800">
        <div className='pb-20'>
            <p className={`mb-15 font-normal text-center text-gray-500 text-4xl px-12 sm:px-16 xl:pl-5 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>HandBook</p>
            <p className={`mb-15 font-normal text-center text-gray-500 text-4xl px-12 sm:px-16 xl:pl-5 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>新生手冊</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 pb-20">
            <div class="zoom-box flex flex-col rounded-xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                <img
                    class="h-96 w-full rounded-t-xl object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-xl"
                    src={telecoms}
                    alt="" />
                <div class="flex flex-col justify-start p-6">
                    <h5 class={`mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-800 ${state.langMode ? "shown" : "hidden"}`}>
                        手機資訊
                    </h5>
                    <h5 class={`mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-800 ${state.langMode ? "hidden" : "shown"}`}>
                        Phone Information
                    </h5>
                    <p class={`mb-4 text-base text-neutral-600 dark:text-neutral-800 ${state.langMode ? "shown" : "hidden"}`}>
                        電話信息是指與移動電話或固定電話號碼相關的個人數據和使用詳細信息，包括通話記錄、短信歷史記錄和其他相關元數據。
                    </p>
                    <p class={`mb-4 text-base text-neutral-600 dark:text-neutral-800 ${state.langMode ? "hidden" : "shown"}`}>
                        Phone information refers to the personal data and usage details associated with a mobile or landline phone number, including call logs, messaging history, and other related metadata.
                    </p>
{/*                     <p class="text-xs text-neutral-500 dark:text-neutral-300">
                        Last updated 3 mins ago
                    </p> */}
                </div>
            </div>

            <div class="zoom-box flex flex-col rounded-xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                <img
                    class="h-96 w-full rounded-t-xl object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-xl"
                    src={banks}
                    alt="" />
                <div class="flex flex-col justify-start p-6">
                    <h5 class={`mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-800 ${state.langMode ? "shown" : "hidden"}`}>
                        銀行資訊
                    </h5>
                    <h5 class={`mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-800 ${state.langMode ? "hidden" : "shown"}`}>
                        Banking Information
                    </h5>
                    <p class={`mb-4 text-base text-neutral-600 dark:text-neutral-800 ${state.langMode ? "shown" : "hidden"}`}>
                        銀行信息是指與個人賬戶、交易和與金融機構的互動相關的個人和財務數據的集合。
                    </p>
                    <p class={`mb-4 text-base text-neutral-600 dark:text-neutral-800 ${state.langMode ? "hidden" : "shown"}`}> 
                        Banking information is the collection of personal and financial data related to an individual's account, transactions, and interactions with a financial institution.
                    </p>
{/*                     <p class="text-xs text-neutral-500 dark:text-neutral-300">
                        Last updated 3 mins ago
                    </p> */}
                </div>
            </div>
  
            <div class="zoom-box flex flex-col rounded-xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                <img
                    class="h-96 w-full rounded-t-xl object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-xl"
                    src={driver}
                    alt="" />
                <div class="flex flex-col justify-start p-6">
                    <h5 class={`mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-800 ${state.langMode ? "shown" : "hidden"}`}>
                        駕照資訊
                    </h5>
                    <h5 class={`mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-800 ${state.langMode ? "hidden" : "shown"}`}>
                        Driver's License Information
                    </h5>
                    <p class={`mb-4 text-base text-neutral-600 dark:text-neutral-800 ${state.langMode ? "shown" : "hidden"}`}>
                        駕照信息是個人和法律文件，確認一個人有資格駕駛機動車，並包含姓名、地址、出生日期和許可狀態等信息。
                    </p>
                    <p class={`mb-4 text-base text-neutral-600 dark:text-neutral-800 ${state.langMode ? "hidden" : "shown"}`}>
                        Driver's License Information is personal and legal documentation that confirms a person's eligibility to operate a motor vehicle.
                    </p>
{/*                     <p class="text-xs text-neutral-500 dark:text-neutral-300">
                        Last updated 3 mins ago
                    </p> */}
                </div>
            </div>
        </div>
    </section>

  </div>
  )
}

export default HandBookList