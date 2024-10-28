import Link from "next/link";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navitems = [
  {
    slug: "About",
    link: "/",
    enabled: true,
  },
  {
    slug: "Projects",
    link: "/projects",
    enabled: true,
  },
  {
    slug: "Resume",
    link: "/resume",
    enabled: true,
  },
  {
    slug: "Contact",
    link: "/#contact",
    enabled: true,
  },
  {
    slug: "Blogs",
    link: "/",
    enabled: false,
  },
];

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>
        <div className="p-4 flex flex-row justify-start align-middle items-center gap-4">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path
            className="dark:fill-gray-100 fill-gray-900"
              d="M0 0 C4.38212909 3.56257059 7.27459004 8.34720761 9.046875 13.6640625 C9.36216813 21.24742145 8.45733116 28.56511433 7.48632812 36.07836914 C7.31836275 37.40966855 7.15089095 38.74103032 6.98387146 40.07244873 C6.53226643 43.6612905 6.07382066 47.24922798 5.61408043 50.83703542 C5.13359589 54.59612473 4.65949233 58.35601871 4.18469238 62.11582947 C3.28606551 69.22408797 2.38175665 76.33161135 1.47537088 83.4388842 C0.44314793 91.53511332 -0.58268749 99.63214777 -1.60800457 107.72925389 C-3.71597153 124.37509224 -5.83190108 141.01990821 -7.953125 157.6640625 C-6.42788208 157.66073158 -6.42788208 157.66073158 -4.87182617 157.65733337 C4.77697852 157.63693736 14.42577875 157.62201183 24.07460022 157.61225033 C29.03346668 157.60706293 33.99231554 157.60004187 38.95117188 157.58862305 C43.74929982 157.57764525 48.54741099 157.57175458 53.34555054 157.56918526 C55.1632819 157.56735754 56.98101249 157.56378948 58.79873657 157.55833244 C96.87371725 157.44871927 96.87371725 157.44871927 107.96484375 166.55859375 C114.8504974 173.52175945 117.42551017 181.01678196 117.42089844 190.63916016 C117.07951274 203.73285356 109.16808157 213.29991036 101.70703125 223.41113281 C99.5082926 226.3949505 97.34124564 229.40110769 95.17382812 232.40771484 C94.08555736 233.91698832 92.99570196 235.4251204 91.90429688 236.93212891 C88.24710307 241.98311021 84.63386031 247.06303228 81.046875 252.1640625 C75.33336228 260.28603769 69.52739798 268.33900136 63.70117188 276.38037109 C60.91769298 280.22285362 58.13812901 284.0681622 55.359375 287.9140625 C54.81547119 288.66679443 54.27156738 289.41952637 53.71118164 290.19506836 C50.07386458 295.23249658 46.45564594 300.28313304 42.8503418 305.34350586 C39.4793822 310.07041992 36.07664874 314.77396913 32.671875 319.4765625 C28.42444519 325.34537653 24.21447748 331.23830657 20.046875 337.1640625 C13.25468702 346.81923994 6.32867399 356.37612027 -0.59863281 365.93457031 C-5.93779387 373.30407188 -11.27380222 380.67504024 -16.52148438 388.11010742 C-17.51211293 389.51333601 -18.50557499 390.91456881 -19.50195312 392.3137207 C-22.07555193 395.93973154 -24.57274595 399.59602107 -26.984375 403.33203125 C-33.23719788 412.87406809 -37.94206677 418.67672942 -49.5390625 421.234375 C-57.64585918 422.67733234 -63.11997824 421.23472923 -69.953125 416.6640625 C-74.06735584 412.87152049 -77.6907691 408.61588857 -78.19951534 402.89186859 C-78.12312554 395.00906784 -77.51304227 387.33245248 -76.50024414 379.51757812 C-76.3457933 378.27525421 -76.19134247 377.0329303 -76.0322113 375.75296021 C-75.61236561 372.38907362 -75.18549731 369.02622949 -74.75519109 365.66367531 C-74.30430019 362.12735663 -73.86235023 358.58991978 -73.41929626 355.0526123 C-72.67554132 349.12456526 -71.92592234 343.19728515 -71.17211914 337.27050781 C-70.10986574 328.91837777 -69.05911298 320.56482883 -68.01022923 312.21101093 C-67.28095888 306.40648327 -66.54877678 300.60232234 -65.81616282 294.79821587 C-65.63913555 293.39543856 -65.46220953 291.99264846 -65.28538442 290.58984566 C-64.70484629 285.98467068 -64.12095811 281.37993068 -63.53540039 276.77539062 C-63.38938385 275.61689606 -63.24336731 274.45840149 -63.09292603 273.26480103 C-62.9569249 272.19970306 -62.82092377 271.1346051 -62.68080139 270.03723145 C-62.50519983 268.65359783 -62.50519983 268.65359783 -62.32605076 267.24201202 C-61.95723481 264.69247266 -61.48251116 262.1847101 -60.953125 259.6640625 C-62.07684006 259.66850372 -63.20055511 259.67294495 -64.35832214 259.67752075 C-74.99403266 259.7182198 -85.62972719 259.74811995 -96.26549816 259.76768684 C-101.73228918 259.77808481 -107.19901689 259.79217053 -112.66577148 259.81494141 C-117.95017931 259.83681279 -123.23452658 259.84866104 -128.51897621 259.85381699 C-130.52619695 259.85748724 -132.5334147 259.86465366 -134.54060936 259.87552261 C-166.7782912 260.0430071 -166.7782912 260.0430071 -177.57421875 250.18359375 C-183.93364281 243.14482469 -184.608667 235.73022251 -184.2734375 226.640625 C-183.26918719 214.17322485 -176.01873188 205.70526331 -168.72753906 196.03125 C-165.89865812 192.25733288 -163.14591868 188.4293531 -160.390625 184.6015625 C-159.58347046 183.48479126 -159.58347046 183.48479126 -158.76000977 182.34545898 C-155.12296503 177.30917219 -151.52752147 172.24495468 -147.953125 167.1640625 C-142.23942449 159.04221689 -136.43365028 150.98912682 -130.60742188 142.94775391 C-127.82394298 139.10527138 -125.04437901 135.2599628 -122.265625 131.4140625 C-121.72172119 130.66133057 -121.17781738 129.90859863 -120.61743164 129.13305664 C-116.98011458 124.09562842 -113.36189594 119.04499196 -109.7565918 113.98461914 C-106.3856322 109.25770508 -102.98289874 104.55415587 -99.578125 99.8515625 C-95.33069519 93.98274847 -91.12072748 88.08981843 -86.953125 82.1640625 C-80.16093702 72.50888506 -73.23492399 62.95200473 -66.30761719 53.39355469 C-60.47848211 45.34775506 -54.671027 37.28940296 -48.953125 29.1640625 C-47.47447778 27.06803941 -45.99508502 24.97254604 -44.51513672 22.87744141 C-43.42404098 21.33135295 -42.33465936 19.78405402 -41.24658203 18.23583984 C-39.51008951 15.76925855 -37.76385954 13.30983086 -36.015625 10.8515625 C-35.48388672 10.09230469 -34.95214844 9.33304688 -34.40429688 8.55078125 C-25.63910727 -3.71381865 -13.59110781 -8.24141644 0 0 Z M-46.953125 101.6640625 C-47.4793042 102.37816284 -47.4793042 102.37816284 -48.01611328 103.10668945 C-49.08372635 104.55559291 -50.15135485 106.004485 -51.21899414 107.45336914 C-52.47610349 109.15950507 -53.73309912 110.86572478 -54.98999023 112.57202148 C-58.1717264 116.89107926 -61.35488787 121.20906038 -64.54296875 125.5234375 C-70.21931775 133.20886713 -75.86991407 140.910639 -81.453125 148.6640625 C-88.79336721 158.85748116 -96.25766858 168.95807541 -103.72363281 179.05957031 C-110.24534524 187.88602927 -116.75193001 196.72338191 -123.203125 205.6015625 C-123.75234619 206.3531665 -124.30156738 207.10477051 -124.86743164 207.87915039 C-125.3752417 208.58031982 -125.88305176 209.28148926 -126.40625 210.00390625 C-126.85129883 210.61613037 -127.29634766 211.22835449 -127.75488281 211.85913086 C-128.99745942 213.73084416 -129.96523249 215.64879633 -130.953125 217.6640625 C-129.70777481 217.66992874 -128.46242462 217.67579498 -127.17933655 217.68183899 C-115.42381407 217.73913538 -103.66847534 217.81193336 -91.9131403 217.89977741 C-85.8700857 217.94444066 -79.8270979 217.9837059 -73.78393555 218.01049805 C-67.94828552 218.03657107 -62.11289307 218.07700228 -56.27740288 218.12724876 C-54.05479583 218.14389035 -51.83214426 218.15542144 -49.60948372 218.16167641 C-46.4881626 218.17134677 -43.36749646 218.19944193 -40.24633789 218.23168945 C-39.33427078 218.23025436 -38.42220367 218.22881927 -37.48249817 218.2273407 C-30.3584835 218.33093822 -24.20557732 219.68430892 -18.078125 223.4140625 C-13.98834196 227.74442101 -12.6785476 232.16483446 -12.77487183 238.04406738 C-13.14297644 243.45453091 -14.01851684 248.80860927 -14.83564949 254.16616058 C-15.18141411 256.4354058 -15.51947835 258.70568343 -15.85557556 260.97637939 C-16.69063473 266.60884 -17.53666418 272.23963546 -18.38616943 277.86993408 C-19.10649678 282.64410829 -19.82080744 287.41909585 -20.52618217 292.19550323 C-20.85866836 294.42993715 -21.20012432 296.66288518 -21.54176331 298.89593506 C-21.74455328 300.26486168 -21.94688426 301.6338564 -22.14868164 303.00292969 C-22.32855118 304.19569519 -22.50842072 305.38846069 -22.69374084 306.61737061 C-22.92636966 309.34979784 -22.84268109 311.10395249 -21.953125 313.6640625 C-21.6221582 313.17228516 -21.29119141 312.68050781 -20.95019531 312.17382812 C-15.12444354 303.53744182 -9.27269416 294.94868238 -2.953125 286.6640625 C1.40356524 280.95112566 5.52424907 275.11678448 9.546875 269.1640625 C14.02759559 262.53344747 18.67534975 256.08529746 23.52734375 249.72265625 C27.95844165 243.8726766 32.07232107 237.82886132 36.17822266 231.74804688 C40.21171409 225.80497394 44.42414437 220.02900866 48.82617188 214.35351562 C51.66340205 210.65823581 54.2352345 206.85949075 56.72509766 202.91992188 C57.34905426 201.93423218 57.97301086 200.94854248 58.61587524 199.9329834 C59.08810516 199.1842395 59.56033508 198.43549561 60.046875 197.6640625 C58.83102219 197.66041687 57.61516937 197.65677124 56.36247253 197.65301514 C44.87243129 197.61598292 33.38265601 197.55812033 21.8928175 197.48015976 C15.98655822 197.44074619 10.08044667 197.40852758 4.17407227 197.39306641 C-1.53196663 197.37785969 -7.2375992 197.34334249 -12.94345665 197.29575348 C-15.11416773 197.28098111 -17.28493683 197.27302388 -19.45569801 197.27217865 C-44.65194099 197.25251125 -44.65194099 197.25251125 -51.66560364 191.18182373 C-56.71793279 185.52951992 -56.32057163 179.81055659 -55.953125 172.6640625 C-55.44340793 168.01827973 -54.77921994 163.40227594 -54.07060051 158.78364372 C-53.72321633 156.51912944 -53.3857983 154.25331289 -53.05067444 151.98695374 C-52.33953626 147.19047276 -51.61547798 142.39598668 -50.890625 137.6015625 C-50.04696863 132.01072355 -49.20864159 126.4191467 -48.38006783 120.82605171 C-48.04689709 118.59273871 -47.70591436 116.36071028 -47.36448669 114.12864685 C-47.16183022 112.76932912 -46.95950561 111.40996187 -46.75756836 110.05053711 C-46.57769882 108.862379 -46.39782928 107.67422089 -46.21250916 106.45005798 C-45.71002313 103.71009708 -45.71002313 103.71009708 -46.953125 101.6640625 Z "
              transform="translate(375.953125,48.3359375)"
            />
            <path
            className="dark:fill-gray-100 fill-gray-900"
              d="M0 0 C1.10323105 -0.0071553 2.2064621 -0.01431061 3.34312439 -0.02168274 C4.55406769 -0.02437164 5.76501099 -0.02706055 7.01264954 -0.02983093 C8.28770859 -0.03640213 9.56276764 -0.04297333 10.87646484 -0.04974365 C15.10714971 -0.0707686 19.33783486 -0.08114607 23.56855774 -0.09111023 C25.02670116 -0.09515868 26.4848444 -0.09927563 27.94298744 -0.10346031 C34.79552445 -0.12251028 41.64805071 -0.13674048 48.5006091 -0.14507228 C56.40122638 -0.15483776 64.30156297 -0.18113979 72.20208138 -0.22157317 C78.31432061 -0.2517768 84.42647958 -0.26654525 90.53879195 -0.26985329 C94.18659888 -0.27219939 97.83410588 -0.2811015 101.4818325 -0.30631447 C105.55608523 -0.33402035 109.62971472 -0.32975115 113.70405579 -0.32279968 C114.90487793 -0.33560974 116.10570007 -0.3484198 117.34291077 -0.36161804 C124.77236189 -0.3154466 130.42090579 0.37565754 136.19706249 5.48835278 C141.07160147 10.76274761 142.11284398 16.94717569 141.93574524 23.87763977 C141.28136987 29.72674888 138.97098716 35.08376749 134.68183899 39.14717102 C127.66516856 43.45860688 121.00262574 43.71595741 112.94526672 43.64888 C111.69859222 43.65428299 110.45191772 43.65968597 109.16746521 43.66525269 C105.77258329 43.67556556 102.37868742 43.66809921 98.98389316 43.65154147 C95.41755272 43.63760799 91.85123949 43.64416032 88.28488159 43.64767456 C82.29903497 43.65036982 76.31338965 43.6369591 70.32759094 43.61372375 C63.42296899 43.58710604 56.51868314 43.58537328 49.61402744 43.59711212 C42.94993792 43.60791795 36.28596909 43.60168168 29.62188911 43.58755684 C26.79551884 43.58182251 23.96923763 43.58185944 21.14286613 43.58662224 C17.19145518 43.59231213 13.24037605 43.57300758 9.28901672 43.55122375 C7.54400124 43.55797623 7.54400124 43.55797623 5.76373291 43.56486511 C-1.29088525 43.50037155 -7.64535104 43.13930578 -13.34159851 38.49873352 C-13.78761414 37.9289679 -14.23362976 37.35920227 -14.69316101 36.77217102 C-15.15464539 36.20756165 -15.61612976 35.64295227 -16.09159851 35.06123352 C-20.11483807 28.78292975 -20.01127194 22.39412834 -19.31816101 15.14717102 C-17.635317 8.9196405 -13.60394034 4.69146389 -8.31816101 1.14717102 C-5.26856467 0.13063891 -3.19255413 0.01420798 0 0 Z "
              transform="translate(72.31816101074219,351.8528289794922)"
            />
            <path
            className="dark:fill-gray-100 fill-gray-900"
              d="M0 0 C0.99515121 -0.00852997 1.99030243 -0.01705994 3.01560974 -0.02584839 C4.09623184 -0.02494202 5.17685394 -0.02403564 6.29022217 -0.02310181 C7.43717056 -0.02981903 8.58411896 -0.03653625 9.76582336 -0.04345703 C13.55883107 -0.06245984 17.351662 -0.0663626 21.14471436 -0.06851196 C23.78401767 -0.07493892 26.42332026 -0.0816672 29.06262207 -0.08868408 C34.59732207 -0.10146594 40.13197425 -0.10445002 45.66668701 -0.10317993 C52.04751607 -0.10197992 58.4280061 -0.12305638 64.80874944 -0.15466726 C70.96344062 -0.18406287 77.11797028 -0.1911535 83.27272797 -0.18996048 C85.88334282 -0.19231696 88.49396032 -0.20114308 91.10453033 -0.21662521 C94.76176327 -0.23628136 98.41813072 -0.23044719 102.07537842 -0.21841431 C103.14790359 -0.22965332 104.22042877 -0.24089233 105.32545471 -0.25247192 C111.94829614 -0.19726805 117.22699809 0.78255252 122.94158936 4.26742554 C125.09783936 6.48617554 125.09783936 6.48617554 126.44158936 8.76742554 C126.90565186 9.52023804 127.36971436 10.27305054 127.84783936 11.04867554 C130.52412757 16.47771734 130.79866817 22.54891825 129.44549561 28.41976929 C127.43413316 34.34022033 124.58775378 38.78683927 119.00566101 41.91014099 C113.8817352 43.97445953 108.61280994 43.69389533 103.16644287 43.67147827 C101.41391205 43.68177315 101.41391205 43.68177315 99.62597656 43.692276 C95.77402503 43.71053776 91.92248103 43.70670722 88.07049561 43.70101929 C86.06544473 43.70442768 84.06039366 43.70784419 82.055345 43.71237236 C75.7555816 43.72639388 69.45595388 43.7248762 63.15618896 43.71347046 C56.67303705 43.70199154 50.19029894 43.7160661 43.70720154 43.74286693 C38.12563572 43.76507064 32.54419936 43.77165085 26.96259254 43.76579052 C23.63567199 43.76243081 20.30907412 43.76649356 16.98217964 43.78204155 C13.26985161 43.79694703 9.55843036 43.78627613 5.84613037 43.76913452 C4.75445053 43.77880249 3.66277069 43.78847046 2.53800964 43.7984314 C-4.71884254 43.72839674 -10.50897681 42.77164366 -15.89825439 37.45101929 C-16.44159424 36.58670288 -16.44159424 36.58670288 -16.99591064 35.70492554 C-17.37618408 35.12613647 -17.75645752 34.54734741 -18.14825439 33.95101929 C-21.41131074 27.91506528 -21.26484134 18.44512267 -19.37481689 11.90023804 C-15.41773722 4.51150006 -8.31751754 0.03236897 0 0 Z "
              transform="translate(84.05841064453125,116.73257446289063)"
            />
            <path
            className="dark:fill-gray-100 fill-gray-900"
              d="M0 0 C0.87742355 -0.00571014 1.75484711 -0.01142029 2.65885925 -0.01730347 C4.09117638 -0.01898026 4.09117638 -0.01898026 5.5524292 -0.02069092 C7.07021721 -0.02813828 7.07021721 -0.02813828 8.6186676 -0.03573608 C11.96736328 -0.05034502 15.31601157 -0.05715791 18.66473389 -0.06268311 C20.99397788 -0.06843594 23.32322185 -0.07419366 25.65246582 -0.07995605 C30.5382306 -0.09046267 35.42397893 -0.09630745 40.30975342 -0.09979248 C46.56189995 -0.10527406 52.81382835 -0.12929655 59.06590652 -0.15776443 C63.87868885 -0.17641406 68.69141891 -0.18159768 73.50423431 -0.18312836 C75.80865419 -0.18615054 78.11307324 -0.19416438 80.41745758 -0.20731354 C83.64620925 -0.22442096 86.87443149 -0.22248201 90.10321045 -0.21600342 C91.52338219 -0.22982559 91.52338219 -0.22982559 92.97224426 -0.243927 C100.09370772 -0.19929958 106.05811666 1.03136773 111.89910889 5.39044189 C117.07763476 10.6893986 117.78457354 14.84551984 118.02410889 22.07794189 C117.85729458 28.91007547 116.79539228 33.54327549 112.23114014 38.65997314 C105.90497409 44.5451732 98.39856171 44.43640367 90.2802124 44.4151001 C89.26791565 44.42021103 88.2556189 44.42532196 87.21264648 44.43058777 C83.88020854 44.44444065 80.54797838 44.44353031 77.21551514 44.44122314 C74.8905581 44.44511222 72.56560177 44.44944732 70.24064636 44.45420837 C65.37278945 44.46166118 60.50500509 44.46138593 55.637146 44.45611572 C49.40860677 44.45032012 43.18036482 44.46725911 36.95187473 44.4904604 C32.15195488 44.50521296 27.3521064 44.50606738 22.55216789 44.50295067 C20.25612741 44.50346304 17.96008284 44.50868486 15.66406441 44.51876259 C12.44998125 44.53113993 9.23647428 44.5243273 6.0223999 44.51275635 C5.08033188 44.52040009 4.13826385 44.52804382 3.16764832 44.53591919 C-3.83549209 44.48037415 -9.06205951 43.1207742 -15.16339111 39.51544189 C-19.94195133 34.47140611 -21.65846927 29.03212211 -21.91339111 22.14044189 C-21.6766957 16.50278739 -20.8340164 11.73151986 -17.41339111 7.14044189 C-12.0631449 2.48720023 -7.09935707 0.02777875 0 0 Z "
              transform="translate(42.41339111328125,233.85955810546875)"
            />
          </svg>

          <h1 className={`${ubuntu.className} font-bold`}>Satvik Virmani</h1>
        </div>
      </Link>
      <div className="p-4 flex flex-row justify-start align-middle items-center gap-4 border-y">
        {Navitems.map((item) => {
          return (
            <Link href={item.link} key={item.slug}>
              {item.enabled ? (
                <span className="text-sm md:text-base font-medium hover:text-blue-500">
                  {item.slug}
                </span>
              ) : (
                <span className="text-sm md:text-base font-medium text-gray-400 dark:text-gray-600">
                  {item.slug}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
