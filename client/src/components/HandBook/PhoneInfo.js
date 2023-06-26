import React from 'react'
import telecoms from "./images/telecom.png"
import { Link } from 'react-router-dom'

const Phone = () => {
  return (
    <div class="container my-24 mx-auto md:px-6">
      <div class="mb-6 flex items-center">
        <div>
          <span> Updated dated: <u>24.July.2023</u> </span>
        </div>
      </div>
      <section class="mb-32">
        <h1 class="mb-4 text-3xl font-bold">
          美國手機門號、eSIM、美國收台灣簡訊之新手入門
        </h1>

        <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            class="mr-2 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
            </svg>Hot news
        </p>

        <p class="mb-6">
          對於剛來或將要來美國的你，有很多問題需要關注像是租房、辦門號和開銀行帳戶。
          這裡想介紹一下辦理手機門號的事情。然而，我必須說明，選擇手機門號方案是因人而異的，
          每個人的需求各有不同。有些人在沒有Wi-Fi的地方無法忍受無法觀看YouTube的情況，
          有些人使用手機的數據量不大，但一旦沒有信號就會感到焦慮，還有些人需要將手機設置為熱點，
          以便在路上工作時連接電腦。還有些人只是需要一個美國的門號填寫資料，
          另外還有些人需要收取來自台灣的簡訊，例如信用卡認證碼等。我的經驗有限，
          只能告訴你目前適合我個人的解決方案。希望你在選擇方案時，能清楚地思考自己的需求和財務情況，
          這樣才能找到最適合你的解決方案。
        </p>

        <img src={telecoms}
          class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />

        <p class="mb-6">
          <strong>美國當地大電信：</strong>
        </p>
        
        <ul class="mb-6 list-inside list-disc">
          <li>                
            <Link
              className='text-orange-600'
              to='https://www.verizon.com/'
              target='_blank'
              aria-label='Verizon'
            >
            Verizon
            </Link>
          </li>
          <li>                
            <Link
              className='text-orange-600'
              to='https://www.att.com/'
              target='_blank'
              aria-label='AT&T'
            >
            AT&T
            </Link>
          </li>
          <li>                
            <Link
              className='text-orange-600'
              to='https://www.t-mobile.com/'
              target='_blank'
              aria-label='T-Mobile'
            >
            T-Mobile
            </Link>
          </li>
          <li>                
            <Link
              className='text-orange-600'
              to='https://www.xfinity.com/overview'
              target='_blank'
              aria-label='xfinity'
            >
            Xfinity
            </Link>
          </li>
        </ul>
        
        <p class="mb-6">
        </p>
        <p class="mb-6">
          <strong>手機通訊覆蓋地圖查詢：</strong>
        </p>

        <ul class="mb-6 list-inside list-disc">
          <li>                
            <Link
              className='text-orange-600'
              to='https://www.verizon.com/home/fios-fastest-internet/availability/'
              target='_blank'
              aria-label='Verizon'
            >
            Verizon
            </Link>
          </li>
          <li>                
            <Link
              className='text-orange-600'
              to='https://www.att.com/maps/wireless-coverage.html'
              target='_blank'
              aria-label='AT&T'
            >
            AT&T
            </Link>
          </li>
          <li>                
            <Link
              className='text-orange-600'
              to='https://www.t-mobile.com/coverage/coverage-map'
              target='_blank'
              aria-label='T-Mobile'
            >
            T-Mobile
            </Link>
          </li>
          <li>                
            <Link
              className='text-orange-600'
              to='https://www.xfinity.com/mobile/learn/network-coverage'
              target='_blank'
              aria-label='xfinity'
            >
            Xfinity
            </Link>
          </li>
        </ul>

        <p  className="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 dark:border-neutral-200 dark:bg-neutral-700">
          <strong>
            手機相容性：
          </strong> 
          選擇電信公司時還有一個很重要的考量：手機相容性。不同型號的手機所適用的頻寬並不相同，
          因此若從台灣帶自己的手機到美國換sim卡時，一定要確認自己選擇的電信公司與自己的手機型號能不能相容。
          AT&T與T-Mobile使用的是GSM技術，原則上台灣帶過去的手機換了sim卡後就可以直接使用，
          而Verizon目前大部分使用的還是CDMA技術，有些手機型號並不相容。也因此，
          大部分的台灣留學生選擇的電信公司應該都是AT&T以及T-Mobile
        </p>

      </section>
    </div>
  )
}

export default Phone
