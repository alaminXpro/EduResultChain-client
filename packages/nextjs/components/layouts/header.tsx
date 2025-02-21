"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Dropdown from "@/components/dropdown";
import IconArrowLeft from "@/components/icon/icon-arrow-left";
import IconBellBing from "@/components/icon/icon-bell-bing";
import IconCalendar from "@/components/icon/icon-calendar";
import IconCaretDown from "@/components/icon/icon-caret-down";
import IconChatNotification from "@/components/icon/icon-chat-notification";
import IconEdit from "@/components/icon/icon-edit";
import IconInfoCircle from "@/components/icon/icon-info-circle";
import IconLaptop from "@/components/icon/icon-laptop";
import IconLockDots from "@/components/icon/icon-lock-dots";
import IconLogout from "@/components/icon/icon-logout";
import IconMail from "@/components/icon/icon-mail";
import IconMailDot from "@/components/icon/icon-mail-dot";
import IconMenu from "@/components/icon/icon-menu";
import IconMoon from "@/components/icon/icon-moon";
import IconSearch from "@/components/icon/icon-search";
import IconSun from "@/components/icon/icon-sun";
import IconUser from "@/components/icon/icon-user";
import IconXCircle from "@/components/icon/icon-x-circle";
import IconMenuApps from "@/components/icon/menu/icon-menu-apps";
import IconMenuAuthentication from "@/components/icon/menu/icon-menu-authentication";
import IconMenuComponents from "@/components/icon/menu/icon-menu-components";
import IconMenuDashboard from "@/components/icon/menu/icon-menu-dashboard";
import IconMenuDatatables from "@/components/icon/menu/icon-menu-datatables";
import IconMenuElements from "@/components/icon/menu/icon-menu-elements";
import IconMenuForms from "@/components/icon/menu/icon-menu-forms";
import IconMenuMore from "@/components/icon/menu/icon-menu-more";
import IconMenuNotes from "@/components/icon/menu/icon-menu-notes";
import IconMenuPages from "@/components/icon/menu/icon-menu-pages";
import { getTranslation } from "@/i18n";
import { useGetUser, useLogout } from "@/services/api";
import { IRootState } from "@/store";
import { toggleRTL, toggleSidebar, toggleTheme } from "@/store/themeConfigSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const { t, i18n } = getTranslation();
  const { mutate: logout } = useLogout();
  const { data: user } = useGetUser();
  useEffect(() => {
    const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
    if (selector) {
      const all: any = document.querySelectorAll("ul.horizontal-menu .nav-link.active");
      for (let i = 0; i < all.length; i++) {
        all[0]?.classList.remove("active");
      }

      const allLinks = document.querySelectorAll("ul.horizontal-menu a.active");
      for (let i = 0; i < allLinks.length; i++) {
        const element = allLinks[i];
        element?.classList.remove("active");
      }
      selector?.classList.add("active");

      const ul: any = selector.closest("ul.sub-menu");
      if (ul) {
        let ele: any = ul.closest("li.menu").querySelectorAll(".nav-link");
        if (ele) {
          ele = ele[0];
          setTimeout(() => {
            ele?.classList.add("active");
          });
        }
      }
    }
  }, [pathname]);

  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === "rtl";

  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const setLocale = (flag: string) => {
    if (flag.toLowerCase() === "ae") {
      dispatch(toggleRTL("rtl"));
    } else {
      dispatch(toggleRTL("ltr"));
    }
    router.refresh();
  };

  function createMarkup(messages: any) {
    return { __html: messages };
  }
  const [messages, setMessages] = useState([
    {
      id: 1,
      image:
        '<span class="grid place-content-center w-9 h-9 rounded-full bg-success-light dark:bg-success text-success dark:text-success-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>',
      title: "Congratulations!",
      message: "Your OS has been updated.",
      time: "1hr",
    },
    {
      id: 2,
      image:
        '<span class="grid place-content-center w-9 h-9 rounded-full bg-info-light dark:bg-info text-info dark:text-info-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></span>',
      title: "Did you know?",
      message: "You can switch between artboards.",
      time: "2hr",
    },
    {
      id: 3,
      image:
        '<span class="grid place-content-center w-9 h-9 rounded-full bg-danger-light dark:bg-danger text-danger dark:text-danger-light"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>',
      title: "Something went wrong!",
      message: "Send Reposrt",
      time: "2days",
    },
    {
      id: 4,
      image:
        '<span class="grid place-content-center w-9 h-9 rounded-full bg-warning-light dark:bg-warning text-warning dark:text-warning-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">    <circle cx="12" cy="12" r="10"></circle>    <line x1="12" y1="8" x2="12" y2="12"></line>    <line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span>',
      title: "Warning",
      message: "Your password strength is low.",
      time: "5days",
    },
  ]);

  const removeMessage = (value: number) => {
    setMessages(messages.filter(user => user.id !== value));
  };

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      profile: "favicon.png",
      message: '<strong class="text-sm mr-1">Result Published</strong>for <strong>CSE 4th Semester</strong>',
      time: "Just now",
    },
    {
      id: 2,
      profile: "favicon.png",
      message: '<strong class="text-sm mr-1">Revalidation Request</strong>has been <strong>Approved</strong>',
      time: "2h Ago",
    },
    {
      id: 3,
      profile: "favicon.png",
      message: '<strong class="text-sm mr-1">Certificate</strong>has been uploaded to <strong>Blockchain</strong>',
      time: "3h Ago",
    },
    {
      id: 4,
      profile: "favicon.png",
      message: '<strong class="text-sm mr-1">New Notice:</strong>Upcoming <strong>Result Publication Schedule</strong>',
      time: "5h Ago",
    },
    {
      id: 5,
      profile: "favicon.png",
      message: '<strong class="text-sm mr-1">System Update:</strong>Maintenance scheduled for <strong>Tonight</strong>',
      time: "1d Ago",
    },
  ]);

  const removeNotification = (value: number) => {
    setNotifications(notifications.filter(user => user.id !== value));
  };

  const [search, setSearch] = useState(false);

  const isInstitutionDashboard = pathname === "/institution";
  const isStudentDashboard = pathname === "/student";

  return (
    <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === "horizontal" ? "dark" : ""}`}>
      <div className="shadow-sm">
        <div className="relative flex w-full items-center bg-white px-5 py-2.5 dark:bg-black">
          <div className="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2 lg:hidden">
            <Link href="/" className="main-logo flex shrink-0 items-center">
              <img className="inline w-8 ltr:-ml-1 rtl:-mr-1" src="/favicon.png" alt="logo" />
              <span className="hidden align-middle text-2xl  font-semibold  transition-all duration-300 ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light md:inline">
                EduResultChain
              </span>
            </Link>
            <button
              type="button"
              className="collapse-icon flex flex-none rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary ltr:ml-2 rtl:mr-2 dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary lg:hidden"
              onClick={() => dispatch(toggleSidebar())}
            >
              <IconMenu className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center space-x-1.5 ltr:ml-auto rtl:mr-auto rtl:space-x-reverse dark:text-[#d0d2d6] sm:flex-1 ltr:sm:ml-0 sm:rtl:mr-0 lg:space-x-2">
            <div className="sm:ltr:mr-auto sm:rtl:ml-auto">
              <form
                className={`${search && "!block"} absolute inset-x-0 top-1/2 z-10 mx-4 hidden -translate-y-1/2 sm:relative sm:top-0 sm:mx-0 sm:block sm:translate-y-0`}
                onSubmit={() => setSearch(false)}
              >
                <div className="relative">
                  <input
                    type="text"
                    className="peer form-input bg-gray-100 placeholder:tracking-widest ltr:pl-9 ltr:pr-9 rtl:pl-9 rtl:pr-9 sm:bg-transparent ltr:sm:pr-4 rtl:sm:pl-4"
                    placeholder={t("search")}
                  />
                  <button
                    type="button"
                    className="absolute inset-0 h-9 w-9 appearance-none peer-focus:text-primary ltr:right-auto rtl:left-auto"
                  >
                    <IconSearch className="mx-auto" />
                  </button>
                  <button
                    type="button"
                    className="absolute top-1/2 block -translate-y-1/2 hover:opacity-80 ltr:right-2 rtl:left-2 sm:hidden"
                    onClick={() => setSearch(false)}
                  >
                    <IconXCircle />
                  </button>
                </div>
              </form>
              <button
                type="button"
                onClick={() => setSearch(!search)}
                className="search_btn rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 dark:bg-dark/40 dark:hover:bg-dark/60 sm:hidden"
              >
                <IconSearch className="mx-auto h-4.5 w-4.5 dark:text-[#d0d2d6]" />
              </button>
            </div>
            <div>
              {themeConfig.theme === "light" ? (
                <button
                  className={`${
                    themeConfig.theme === "light" &&
                    "flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
                  }`}
                  onClick={() => dispatch(toggleTheme("dark"))}
                >
                  <IconSun />
                </button>
              ) : (
                ""
              )}
              {themeConfig.theme === "dark" && (
                <button
                  className={`${
                    themeConfig.theme === "dark" &&
                    "flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
                  }`}
                  onClick={() => dispatch(toggleTheme("system"))}
                >
                  <IconMoon />
                </button>
              )}
              {themeConfig.theme === "system" && (
                <button
                  className={`${
                    themeConfig.theme === "system" &&
                    "flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
                  }`}
                  onClick={() => dispatch(toggleTheme("light"))}
                >
                  <IconLaptop />
                </button>
              )}
            </div>
            <div className="dropdown shrink-0">
              <Dropdown
                offset={[0, 8]}
                placement={`${isRtl ? "bottom-start" : "bottom-end"}`}
                btnClassName="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                button={
                  i18n.language && (
                    <img
                      className="h-5 w-5 rounded-full object-cover"
                      src={`/assets/images/flags/${i18n.language.toUpperCase()}.svg`}
                      alt="flag"
                    />
                  )
                }
              >
                <ul className="grid w-[280px] grid-cols-2 gap-2 !px-2 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
                  {themeConfig.languageList.map((item: any) => {
                    return (
                      <li key={item.code}>
                        <button
                          type="button"
                          className={`flex w-full hover:text-primary ${i18n.language === item.code ? "bg-primary/10 text-primary" : ""}`}
                          onClick={() => {
                            i18n.changeLanguage(item.code);
                            setLocale(item.code);
                          }}
                        >
                          <img
                            src={`/assets/images/flags/${item.code.toUpperCase()}.svg`}
                            alt="flag"
                            className="h-5 w-5 rounded-full object-cover"
                          />
                          <span className="ltr:ml-3 rtl:mr-3">{item.name}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </Dropdown>
            </div>

            <div className="dropdown shrink-0">
              <Dropdown
                offset={[0, 8]}
                placement={`${isRtl ? "bottom-start" : "bottom-end"}`}
                btnClassName="relative block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                button={
                  <span>
                    <IconBellBing />
                    <span className="absolute top-0 flex h-3 w-3 ltr:right-0 rtl:left-0">
                      <span className="absolute -top-[3px] inline-flex h-full w-full animate-ping rounded-full bg-success/50 opacity-75 ltr:-left-[3px] rtl:-right-[3px]"></span>
                      <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-success"></span>
                    </span>
                  </span>
                }
              >
                <ul className="w-[300px] divide-y !py-0 text-dark dark:divide-white/10 dark:text-white-dark sm:w-[350px]">
                  <li onClick={e => e.stopPropagation()}>
                    <div className="flex items-center justify-between px-4 py-2 font-semibold">
                      <h4 className="text-lg">{t("notification")}</h4>
                      {notifications.length ? (
                        <span className="badge bg-primary/80">{notifications.length} new</span>
                      ) : (
                        ""
                      )}
                    </div>
                  </li>
                  {notifications.length > 0 ? (
                    <>
                      {notifications.map(notification => {
                        return (
                          <li
                            key={notification.id}
                            className="dark:text-white-light/90"
                            onClick={e => e.stopPropagation()}
                          >
                            <div className="group flex items-center px-4 py-2">
                              <div className="grid place-content-center rounded">
                                <div className="relative h-12 w-12">
                                  <img
                                    className="h-12 w-12 rounded-full object-cover"
                                    alt="profile"
                                    src={`/${notification.profile}`}
                                  />
                                  <span className="absolute bottom-0 right-[6px] block h-2 w-2 rounded-full bg-success"></span>
                                </div>
                              </div>
                              <div className="flex flex-auto ltr:pl-3 rtl:pr-3">
                                <div className="ltr:pr-3 rtl:pl-3">
                                  <h6
                                    dangerouslySetInnerHTML={{
                                      __html: notification.message,
                                    }}
                                  ></h6>
                                  <span className="block text-xs font-normal dark:text-gray-500">
                                    {notification.time}
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  className="text-neutral-300 opacity-0 hover:text-danger group-hover:opacity-100 ltr:ml-auto rtl:mr-auto"
                                  onClick={() => removeNotification(notification.id)}
                                >
                                  <IconXCircle />
                                </button>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                      <li>
                        <div className="p-4">
                          <button className="btn btn-primary btn-small block w-full">
                            {t("read_all_notifications")}
                          </button>
                        </div>
                      </li>
                    </>
                  ) : (
                    <li onClick={e => e.stopPropagation()}>
                      <button
                        type="button"
                        className="!grid min-h-[200px] place-content-center text-lg hover:!bg-transparent"
                      >
                        <div className="mx-auto mb-4 rounded-full ring-4 ring-primary/30">
                          <IconInfoCircle fill={true} className="h-10 w-10 text-primary" />
                        </div>
                        No data available.
                      </button>
                    </li>
                  )}
                </ul>
              </Dropdown>
            </div>
            <div className="dropdown flex shrink-0">
              <Dropdown
                offset={[0, 8]}
                placement={`${isRtl ? "bottom-start" : "bottom-end"}`}
                btnClassName="relative group block"
                button={
                  <img
                    className="h-9 w-9 rounded-full object-cover saturate-50 group-hover:saturate-100"
                    src={user?.avatar || "/favicon.png"}
                    alt="userProfile"
                  />
                }
              >
                <ul className="w-[230px] !py-0 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
                  <li>
                    <div className="flex items-center px-4 py-4">
                      <img
                        className="h-10 w-10 rounded-md object-cover"
                        src={user?.avatar || "/favicon.png"}
                        alt="userProfile"
                      />
                      <div className="truncate ltr:pl-4 rtl:pr-4">
                        <h4 className="text-base">
                          {user?.first_name} {user?.last_name}
                        </h4>
                        <button
                          type="button"
                          className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white"
                          title={user?.email}
                        >
                          <span className="inline-block max-w-[200px] truncate">{user?.email}</span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      href={isInstitutionDashboard ? "/institution/profile" : "/student/profile"}
                      className="dark:hover:text-white"
                    >
                      <IconUser className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" />
                      {t("profile")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/login" className="dark:hover:text-white">
                      <IconLockDots className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" />
                      {t("lock_screen")}
                    </Link>
                  </li>
                  <li className="border-t border-white-light dark:border-white-light/10">
                    <button
                      onClick={async () => {
                        await logout();
                        router.push("/login");
                      }}
                      className="w-full flex items-center !py-3 text-danger hover:bg-red-50 dark:hover:bg-red-900/30"
                    >
                      <IconLogout className="h-4.5 w-4.5 shrink-0 rotate-90 ltr:mr-2 rtl:ml-2" />
                      {t("sign_out")}
                    </button>
                  </li>
                </ul>
              </Dropdown>
            </div>
          </div>
        </div>

        {/* horizontal menu */}
        <ul className="horizontal-menu hidden border-t border-[#ebedf2] bg-white px-6 py-1.5 font-semibold text-black rtl:space-x-reverse dark:border-[#191e3a] dark:bg-black dark:text-white-dark lg:space-x-1.5 xl:space-x-8">
          {!isInstitutionDashboard && (
            <li className="menu nav-item relative">
              <Link href="/student">
                <button type="button" className="nav-link">
                  <div className="flex items-center">
                    <IconMenuDashboard className="shrink-0" />
                    <span className="px-1">{t("student")}</span>
                  </div>
                  <div className="right_arrow">
                    <IconCaretDown />
                  </div>
                </button>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link href="/dashboard/student/results">{t("view_results")}</Link>
                </li>
                <li>
                  <Link href="/dashboard/student/certificates">{t("download_certificates")}</Link>
                </li>
                <li>
                  <Link href="/dashboard/student/revalidation">{t("result_revalidation")}</Link>
                </li>
                <li>
                  <Link href="/dashboard/student/blockchain-status">{t("blockchain_status")}</Link>
                </li>
              </ul>
            </li>
          )}

          {!isStudentDashboard && (
            <li className="menu nav-item relative">
              <Link href="/institution">
                <button type="button" className="nav-link">
                  <div className="flex items-center">
                    <IconMenuDatatables className="shrink-0" />
                    <span className="px-1">{t("institution")}</span>
                  </div>
                  <div className="right_arrow">
                    <IconCaretDown />
                  </div>
                </button>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link href="/dashboard/institution/students">{t("student_management")}</Link>
                </li>
                <li>
                  <Link href="/dashboard/institution/results">{t("result_management")}</Link>
                </li>
                <li>
                  <Link href="/dashboard/institution/blockchain">{t("blockchain_upload")}</Link>
                </li>
                <li>
                  <Link href="/dashboard/institution/revalidation-requests">{t("revalidation_requests")}</Link>
                </li>
                <li>
                  <Link href="/dashboard/institution/statistics">{t("result_statistics")}</Link>
                </li>
              </ul>
            </li>
          )}

          <li className="menu nav-item relative">
            <button type="button" className="nav-link">
              <div className="flex items-center">
                <IconMenuPages className="shrink-0" />
                <span className="px-1">{t("results")}</span>
              </div>
              <div className="right_arrow">
                <IconCaretDown />
              </div>
            </button>
            <ul className="sub-menu">
              <li>
                <Link href="/results">{t("result_page")}</Link>
              </li>
              <li>
                <Link href="/verify">{t("result_verification")}</Link>
              </li>
              <li>
                <Link href="/statistics">{t("result_statistics")}</Link>
              </li>
            </ul>
          </li>

          <li className="menu nav-item relative">
            <button type="button" className="nav-link">
              <div className="flex items-center">
                <IconMenuNotes className="shrink-0" />
                <span className="px-1">{t("information")}</span>
              </div>
              <div className="right_arrow">
                <IconCaretDown />
              </div>
            </button>
            <ul className="sub-menu">
              <li>
                <Link href="/notices">{t("notice_board")}</Link>
              </li>
              <li>
                <Link href="/faq">{t("faq")}</Link>
              </li>
            </ul>
          </li>

          <li className="menu nav-item relative">
            <button type="button" className="nav-link">
              <div className="flex items-center">
                <IconMenuAuthentication className="shrink-0" />
                <span className="px-1">{t("about")}</span>
              </div>
              <div className="right_arrow">
                <IconCaretDown />
              </div>
            </button>
            <ul className="sub-menu">
              <li>
                <Link href="/about">{t("about_us")}</Link>
              </li>
              <li>
                <Link href="/contact">{t("contact_us")}</Link>
              </li>
              <li>
                <Link href="/privacy-policy">{t("privacy_policy")}</Link>
              </li>
              <li>
                <Link href="/terms">{t("terms_conditions")}</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
