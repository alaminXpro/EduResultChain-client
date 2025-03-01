"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import IconCaretDown from "@/components/icon/icon-caret-down";
import IconCaretsDown from "@/components/icon/icon-carets-down";
import IconMinus from "@/components/icon/icon-minus";
import IconMenuAuthentication from "@/components/icon/menu/icon-menu-authentication";
import IconMenuCalendar from "@/components/icon/menu/icon-menu-calendar";
import IconMenuCharts from "@/components/icon/menu/icon-menu-charts";
import IconMenuChat from "@/components/icon/menu/icon-menu-chat";
import IconMenuComponents from "@/components/icon/menu/icon-menu-components";
import IconMenuContacts from "@/components/icon/menu/icon-menu-contacts";
import IconMenuDashboard from "@/components/icon/menu/icon-menu-dashboard";
import IconMenuDatatables from "@/components/icon/menu/icon-menu-datatables";
import IconMenuDocumentation from "@/components/icon/menu/icon-menu-documentation";
import IconMenuDragAndDrop from "@/components/icon/menu/icon-menu-drag-and-drop";
import IconMenuElements from "@/components/icon/menu/icon-menu-elements";
import IconMenuFontIcons from "@/components/icon/menu/icon-menu-font-icons";
import IconMenuForms from "@/components/icon/menu/icon-menu-forms";
import IconMenuInvoice from "@/components/icon/menu/icon-menu-invoice";
import IconMenuMailbox from "@/components/icon/menu/icon-menu-mailbox";
import IconMenuNotes from "@/components/icon/menu/icon-menu-notes";
import IconMenuPages from "@/components/icon/menu/icon-menu-pages";
import IconMenuScrumboard from "@/components/icon/menu/icon-menu-scrumboard";
import IconMenuTables from "@/components/icon/menu/icon-menu-tables";
import IconMenuTodo from "@/components/icon/menu/icon-menu-todo";
import IconMenuUsers from "@/components/icon/menu/icon-menu-users";
import IconMenuWidgets from "@/components/icon/menu/icon-menu-widgets";
import { getTranslation } from "@/i18n";
import { IRootState } from "@/store";
import { toggleSidebar } from "@/store/themeConfigSlice";
import AnimateHeight from "react-animate-height";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { t } = getTranslation();
  const pathname = usePathname();
  const [currentMenu, setCurrentMenu] = useState<string>("");
  const [errorSubMenu, setErrorSubMenu] = useState(false);
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
  const toggleMenu = (value: string) => {
    setCurrentMenu(oldValue => {
      return oldValue === value ? "" : value;
    });
  };

  useEffect(() => {
    const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
    if (selector) {
      selector.classList.add("active");
      const ul: any = selector.closest("ul.sub-menu");
      if (ul) {
        let ele: any = ul.closest("li.menu").querySelectorAll(".nav-link") || [];
        if (ele.length) {
          ele = ele[0];
          setTimeout(() => {
            ele.click();
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    setActiveRoute();
    if (window.innerWidth < 1024 && themeConfig.sidebar) {
      dispatch(toggleSidebar());
    }
  }, [pathname]);

  const setActiveRoute = () => {
    const allLinks = document.querySelectorAll(".sidebar ul a.active");
    for (let i = 0; i < allLinks.length; i++) {
      const element = allLinks[i];
      element?.classList.remove("active");
    }
    const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
    selector?.classList.add("active");
  };

  const isStudentDashboard = pathname?.includes("/student");
  const isInstitutionDashboard = pathname?.includes("/institution");
  const isBoardDashboard = pathname?.includes("/board");
  return (
    <div className={semidark ? "dark" : ""}>
      <nav
        className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 ${semidark ? "text-white-dark" : ""}`}
      >
        <div className="h-full bg-white dark:bg-black">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="main-logo flex shrink-0 items-center">
              <img className="ml-[5px] w-8 flex-none" src="/favicon.png" alt="logo" />
              <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">
                EduResultChain
              </span>
            </Link>

            <button
              type="button"
              className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
              onClick={() => dispatch(toggleSidebar())}
            >
              <IconCaretsDown className="m-auto rotate-90" />
            </button>
          </div>
          <PerfectScrollbar className="relative h-[calc(100vh-80px)]">
            <ul className="relative space-y-0.5 p-4 py-0 font-semibold">
              {isStudentDashboard && (
                <>
                  <h2 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                    <IconMinus className="hidden h-5 w-4 flex-none" />
                    <span>{t("student_menu")}</span>
                  </h2>

                  <li className="nav-item">
                    <ul>
                      <li className="nav-item">
                        <Link href="/student" className="group">
                          <div className="flex items-center">
                            <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                            <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                              {t("dashboard")}
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/dashboard/student/results" className="group">
                          <div className="flex items-center">
                            <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                            <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                              {t("view_results")}
                            </span>
                          </div>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/dashboard/student/certificates" className="group">
                          <div className="flex items-center">
                            <IconMenuDocumentation className="shrink-0 group-hover:!text-primary" />
                            <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                              {t("download_certificates")}
                            </span>
                          </div>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/dashboard/student/revalidation" className="group">
                          <div className="flex items-center">
                            <IconMenuForms className="shrink-0 group-hover:!text-primary" />
                            <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                              {t("result_revalidation")}
                            </span>
                          </div>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/dashboard/student/blockchain-status" className="group">
                          <div className="flex items-center">
                            <IconMenuCharts className="shrink-0 group-hover:!text-primary" />
                            <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                              {t("blockchain_status")}
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}

              {isInstitutionDashboard && (
                <>
                  <h2 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                    <IconMinus className="hidden h-5 w-4 flex-none" />
                    <span>{t("institution_menu")}</span>
                  </h2>

                  <li className="nav-item">
                    <ul>
                      <li className="nav-item">
                        <Link href="/institution" className="group">
                          <div className="flex items-center">
                            <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                            <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                              {t("dashboard")}
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/institution/add_new_students" className="group">
                          <div className="flex items-center">
                            <IconMenuUsers className="shrink-0 group-hover:!text-primary" />
                            <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                              {t("add_new_students")}
                            </span>
                          </div>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/institution/form_fillup" className="group">
                          <div className="flex items-center">
                            <IconMenuDatatables className="shrink-0 group-hover:!text-primary" />
                            <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                              {t("form_fillup")}
                            </span>
                          </div>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/dashboard/institution/revalidation-requests" className="group">
                          <div className="flex items-center">
                            <IconMenuForms className="shrink-0 group-hover:!text-primary" />
                            <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                              {t("revalidation_requests")}
                            </span>
                          </div>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/dashboard/institution/statistics" className="group">
                          <div className="flex items-center">
                            <IconMenuCharts className="shrink-0 group-hover:!text-primary" />
                            <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                              {t("result_statistics")}
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}

              {isBoardDashboard && (
                <>
                  <h2 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                    <IconMinus className="hidden h-5 w-4 flex-none" />
                    <span>{t("board_menu")}</span>
                  </h2>

                  <li className="nav-item">
                    <ul>
                      <li className="nav-item">
                        <Link href="/board" className="group">
                          <div className="flex items-center">
                            <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                            <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                              {t("dashboard")}
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <ul>
                      <li className="nav-item">
                        <Link href="/board/institutionList" className="group">
                          <div className="flex items-center">
                            <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                            <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                              {t("Institution List")}
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <ul>
                      <li className="nav-item">
                        <Link href="/board/assesment" className="group">
                          <div className="flex items-center">
                            <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                            <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                              {t("Assesment")}
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <ul>
                      <li className="nav-item">
                        <Link href="/board/assignmarks" className="group">
                          <div className="flex items-center">
                            <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                            <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                              {t("Assignmarks")}
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
