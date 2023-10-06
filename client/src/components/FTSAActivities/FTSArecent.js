import React from 'react';
import chipPowerEN from "../../assets/images/Activities/2023careerWorkShopEN.png";
import chipPowerCN from "../../assets/images/Activities/2023careerWorkShopCN.png";


function FTSArecent({state}) {
  return (
    
      <div>
      {/* Your commented section is kept as is */}
      <div className='pb-20'>
        <p className={`mb-15 font-normal text-center text-gray-500 text-4xl px-12 sm:px-16 xl:pl-5 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>FTSADC COMING EVENT</p>
        <p className={`mb-15 font-normal text-center text-gray-500 text-4xl sm:px-16 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>FTSADC 近期活動</p>
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 pb-20">
        <p>
            <a href="https://forms.gle/mNcjQmXganCpzbzGA" target="_blank" rel="noreferrer">
                <img 
                    src={state.langMode ? chipPowerEN : chipPowerCN} 
                    alt={state.langMode ? "2023 就業職達車 Career Workshop" : "2023 Career Workshop"}
                    className="mt-10 max-w-2xl md:max-w-3xl md:max-h-3xl mx-auto zoom-box shadow-lg" 
                    />  
            </a>
        </p>
      <div className="mb-3 p-10 md:pr-20 md:pl-10 text-gray-500 dark:text-gray-400">
        {/* <div className="mx-auto pt-10">
        <a href="https://ustwhack.super.site/" target="_blank" rel="noreferrer">
          <p className={`hover:text-primary mb-8 font-normal text-center text-gray-500 text-3xl sm:px-16 xl:pl-5 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>2023 “USTW System Upgrade” Hackathon</p>
          <p className={`hover:text-primary mb-8 font-normal text-center text-gray-500 text-3xl sm:px-16 xl:pl-5 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>2023 “USTW System Upgrade” 黑課松</p>

        </a>
          <p className={`mb-8 text-lg font-normal text-left text-gray-500 lg:text-xl px-10 sm:px-16 xl:pl-10 dark:text-gray-400`}>In recent years, with the escalating conflict between the United States and China, US-Taiwan issues have gradually heated up. The United States Taiwan Watch (USTW) hopes to uphold its original spirit by organizing the "US-Taiwan System Upgrade Hackathon." The event calls for like-minded friends from home and abroad who are interested in promoting US-Taiwan relations to gather together and jointly devise strategies for Taiwan's future!</p>
          <p className={`pt-10 mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 `}>Event Date: July 1st to 3rd</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 `}>LOCATION: West Chester University</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 `}>POST TIME: 5/2 19:00</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 `}>HOST: USTW</p>
        </div> */}
        <div className="mx-auto pt-10">
        <a href="https://forms.gle/mNcjQmXganCpzbzGA" target="_blank" rel="noreferrer">
          <p className={`hover:text-primary mb-8 font-normal text-center text-gray-500 text-3xl sm:px-16 xl:pl-5 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>2023 就業職達車 Career Workshop</p>
          <p className={`hover:text-primary mb-8 font-normal text-center text-gray-500 text-3xl sm:px-16 xl:pl-5 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>2023 Career Workshop</p>

        </a>
          <p className={`mb-8 text-lg font-normal text-left text-gray-500 lg:text-xl px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>
            2023 下半學年度的就業職達車要開跑啦～！
            還在為找工作卻因各種簽證而無法實踐而煩惱嗎？
            又或是因為在學期間不知如何找實習而困擾嗎？
          </p>
          <p className={`mb-8 text-lg font-normal text-left text-gray-500 lg:text-xl px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>
            The 2023 Career Workshop for the second half of the 2023 academic year is about to start!
            Are you still troubled because you can't pursue jobs due to various visa issues?
            Or are you confused about how to find internships during your studies?
          </p>
          <p className={`mb-8 text-lg font-normal text-left text-gray-500 lg:text-xl px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>
            華府學聯聽到各位的心聲，為各位準備 hybrid 的職涯講座活動了！職涯講座範圍包括工作簽證申請相關辦理事項，以及撰寫履歷、面試技巧分享。此外，也有針對各個領域例如商學院、理工學院、政法學院邀請業界工作學長姐的經驗談。講座也開放了 Q&A 問答時間讓同學們更直接地解決自己的困惑，以及在講座尾聲實體參與者更有 networking event 讓各位同學包括講者能多交流、拓展人脈。這難能可貴的機會大家要更加善用資源～
          </p>
          <p className={`mb-8 text-lg font-normal text-left text-gray-500 lg:text-xl px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>
            FTSADC has heard your concerns and has prepared a hybrid career seminar for you all! The scope of the career seminar includes matters related to work visa applications, as well as tips on writing resumes and interview techniques. In addition, there are also experience-sharing sessions from working alumni from various fields, such as business schools, science and engineering schools, and schools of political and legal studies. The seminar also offers a Q&A session to directly address students' queries, and at the end of the seminar, there's a networking event for physical attendees to interact and expand their connections, including the speakers. Everyone should make the most of this valuable opportunity!
          </p>
          <p className={`mb-8 text-lg font-normal text-left text-gray-500 lg:text-xl px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>
            這次的講座有邀請到各領域學長姐，詳細講者名單會陸續與大家更新上線。
          </p>
          <p className={`mb-8 text-lg font-normal text-left text-gray-500 lg:text-xl px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>
            For this seminar, we have invited alumni from various fields. A detailed list of speakers will be updated and shared with everyone in due course.
          </p>
          <p className={`pt-10 mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>日期時間: 11/4/2023（六）13:00-18:00  美東時間</p>
          <p className={`pt-10 mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>Event Date & Time: 11/4/2023, Saturday, 1:00 PM - 6:00 PM EST </p>

          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>實體地點: 馬里蘭大學商學院大樓 | Van Munching Hall, UMD, College Park</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>Actual Location: Van Munching Hall, UMD, College Park</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>線上地點: Zoom會議室</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>Online Location: Zoom</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>
              報名方式: 
            <a href="https://forms.gle/mNcjQmXganCpzbzGA" target="_blank" rel="noopener noreferrer"> https://forms.gle/mNcjQmXganCpzbzGA</a>
          </p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>
              Register: 
            <a href="https://forms.gle/mNcjQmXganCpzbzGA" target="_blank" rel="noopener noreferrer"> https://forms.gle/mNcjQmXganCpzbzGA</a>
          </p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>報名費用: 0元免費！</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>Cost: FREE!</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>發布時間: 10/2/2023 08:00 AM  美東時間</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>Post Time: 10/2/2023 08:00 AM EST</p>

          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>主辦單位：大華府地區臺灣同學會聯合會</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>Host: The Federation of Taiwanese Student Association in Washington DC</p>

        </div>
      </div>
    </div>

    </div>
  )
}

export default FTSArecent