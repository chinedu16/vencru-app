export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden sm:block bg-white w-[280px] overflow-y-auto px-4 py-8">
          <div className="flex items-center">
            <img src="/sidebar/Logomark.svg" alt="Vercel" />
            <h1 className="text-[#101828] ml-[11px] text-xl">Untitled UI</h1>
          </div>
          <div className="mt-9">
            <form>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block p-[10px] pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
          <div className="mt-9 space-y-5">
            <div className="flex items-center">
              <img src="/sidebar/home.svg" alt="Vercel" />
              <h3 className="ml-3 font-medium text-[16px] text-[#344054]">
                Home
              </h3>
            </div>
            <div className="flex items-center">
              <img src="/sidebar/bar-chart-2.svg" alt="Vercel" />
              <h3 className="ml-3 font-medium text-[16px] text-[#344054]">
                Dashboard
              </h3>
            </div>
            <div className="flex items-center">
              <img src="/sidebar/3-layers.svg" alt="Vercel" />
              <h3 className="ml-3 font-medium text-[16px] text-[#344054]">
                Projects
              </h3>
            </div>
            <div className="flex items-center">
              <img src="/sidebar/check-square.svg" alt="Vercel" />
              <h3 className="ml-3 font-medium text-[16px] text-[#344054]">
                Tasks
              </h3>
            </div>
            <div className="flex items-center">
              <img src="/sidebar/flag.svg" alt="Vercel" />
              <h3 className="ml-3 font-medium text-[16px] text-[#344054]">
                Reporting
              </h3>
            </div>
            <div className="flex items-center">
              <img src="/sidebar/users.svg" alt="Vercel" />
              <h3 className="ml-3 font-medium text-[16px] text-[#344054]">
                Users
              </h3>
            </div>
          </div>
          <div className="mt-9">
            <div className="space-y-5">
              <div className="flex items-center">
                <img src="/sidebar/life-buoy.svg" alt="Vercel" />
                <h3 className="ml-3 font-medium text-[16px] text-[#344054]">
                  Support
                </h3>
              </div>
              <div className="flex items-center">
                <img src="/sidebar/settings.svg" alt="Vercel" />
                <h3 className="ml-3 font-medium text-[16px] text-[#344054]">
                  Settings
                </h3>
              </div>
            </div>
          </div>
          <div className="text-sm mb-6 bg-[#F9FAFB] rounded p-4 mt-6">
            <h4 className="text-[#101828]">New features available!</h4>
            <h4 className=" text-[#667085] mb-4 mt-1">
              Check out the new dashboard view. Pages now load faster.{" "}
            </h4>
            <img src="/sidebar/image-wrap.png" alt="Vercel" />
            <div className="mt-4 flex items-center space-x-3">
              <span className="text-[#667085]">Dismiss</span>
              <span className="text-[#6941C6]">What’s new?</span>
            </div>
          </div>

          <hr className="mb-6" />
          <div className="flex justify-between">
            <div className="flex space-x-3 items-center">
              <img
                className="w-10 h-10"
                src="/sidebar/avatar.png"
                alt="Vercel"
              />
              <div className="text-sm">
                <h4 className="text-[#101828]">Olivia Rhye</h4>
                <h4 className="text-[#667085] ">olivia@untitledui.com</h4>
              </div>
            </div>
            <img src="/sidebar/log-out.svg" alt="Vercel" />
          </div>
          <div></div>
        </aside>

        <main className="w-full bg-[#F5F5F5] overflow-y-auto paragraph p-8">
          <div>
            <div>
              <h1 className="leading-[38px] text-[30px] text-[#101828] mb-1">
                Settings
              </h1>
              <p className="font-normal text-[#667085]">
                Manage your team and preferences here.
              </p>
            </div>
            <div className="flex items-center mt-6 mb-8 rounded-lg border-solid border">
              <div className=" border-r font-medium text-[#344054] text-sm py-[10px] px-4">
                My details
              </div>
              <div className="border-r font-medium text-[#344054] text-sm py-[10px] px-4">
                Profile
              </div>
              <div className="border-r font-medium text-[#344054] text-sm py-[10px] px-4">
                Password
              </div>
              <div className=" border-r font-medium text-[#344054] text-sm py-[10px] px-4">
                Team
              </div>
              <div className=" border-r font-medium text-[#344054] text-sm py-[10px] px-4">
                Plan
              </div>
              <div className=" border-r font-medium text-[#344054] text-sm py-[10px] px-4">
                Billing
              </div>
              <div className=" border-r font-medium text-[#344054] text-sm py-[10px] px-4">
                Notifications
              </div>
              <div className=" border-r font-medium text-[#344054] text-sm py-[10px] px-4">
                Integrations
              </div>
              <div className=" font-medium text-[#344054] text-sm py-[10px] px-4">
                API
              </div>
            </div>
            <div>
              <h2 className="leading-[28px] text-lg text-[#101828] mb-1">
                Payment method
              </h2>
              <p className="text-[#667085] text-sm">
                Update your billing details and address.
              </p>

              <div className="flex w-full justify-between mt-6 border-t-2 py-5">
                <div className="w-4/12">
                  <h3 className="leading-[28px] text-lg text-[#344054">
                    Contact email
                  </h3>
                  <p className="text-[#667085] text-sm">
                    Where should invoices be sent?
                  </p>
                </div>
                <div className="w-8/12 space-y-4">
                  <div className="flex items-start">
                    <input
                      id="checkbox-2"
                      aria-describedby="checkbox-2"
                      type="checkbox"
                      class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                    />
                    <div className="ml-2 -mt-[5px]">
                      <h4 className="text-lg text-[#344054]">
                        Send to my account email
                      </h4>
                      <p className="text-[#667085] text-sm">
                        olivia@untitledui.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <input
                      id="checkbox-2"
                      aria-describedby="checkbox-2"
                      type="checkbox"
                      class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                    />
                    <div className="ml-2 -mt-[5px]">
                      <h4 className="text-lg text-[#344054] mb-4">
                        Send to an alternative email
                      </h4>
                      <form>
                        <label
                          for="default-search"
                          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                        >
                          Search
                        </label>
                        <div class="relative">
                          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg
                              class="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              ></path>
                            </svg>
                          </div>
                          <input
                            type="search"
                            id="default-search"
                            class="block p-[10px] pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="billing@untitledui.com"
                            required
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full justify-between mt-6 border-t-2 py-5">
                <div className="w-4/12">
                  <h3 className="leading-[28px] text-lg text-[#344054">
                    Contact email
                  </h3>
                  <p className="text-[#667085] text-sm">
                    Where should invoices be sent?
                  </p>
                </div>
                <div className="w-8/12 space-y-4">
                  <div className="flex items-start">
                    <input
                      id="checkbox-2"
                      aria-describedby="checkbox-2"
                      type="checkbox"
                      class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                    />
                    <div className="ml-2 -mt-[5px]">
                      <h4 className="text-lg text-[#344054]">
                        Send to my account email
                      </h4>
                      <p className="text-[#667085] text-sm">
                        olivia@untitledui.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <input
                      id="checkbox-2"
                      aria-describedby="checkbox-2"
                      type="checkbox"
                      class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                    />
                    <div className="ml-2 -mt-[5px]">
                      <h4 className="text-lg text-[#344054] mb-4">
                        Send to an alternative email
                      </h4>
                      <form>
                        <label
                          for="default-search"
                          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                        >
                          Search
                        </label>
                        <div class="relative">
                          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg
                              class="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              ></path>
                            </svg>
                          </div>
                          <input
                            type="search"
                            id="default-search"
                            class="block p-[10px] pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="billing@untitledui.com"
                            required
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="leading-[38px] text-lg text-[#101828] mb-1">
                  Billing history
                </h1>
                <button>Download</button>
              </div>
              <div className="my-7">
                <div class="overflow-x-auto shadow-md sm:rounded-lg">
                  <div class="inline-block min-w-full align-middle">
                    <div class="overflow-hidden">
                      <table class="min-w-full divide-y divide-gray-200 table-fixed">
                        <thead class="bg-gray-100 ">
                          <tr>
                            <th scope="col" class="p-4">
                              <div class="flex items-center">
                                <input
                                  id="checkbox-all"
                                  type="checkbox"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label for="checkbox-all" class="sr-only">
                                  checkbox
                                </label>
                              </div>
                            </th>
                            <th
                              scope="col"
                              class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Invoice
                            </th>
                            <th
                              scope="col"
                              class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Amount
                            </th>
                            <th
                              scope="col"
                              class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Users on plan
                            </th>
                            <th scope="col" class="p-4">
                              <span class="sr-only">Edit</span>
                            </th>
                            
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          <tr class="hover:bg-gray-100">
                            <td class="p-4 w-4">
                              <div class="flex items-center">
                                <input
                                  id="checkbox-table-1"
                                  type="checkbox"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label for="checkbox-table-1" class="sr-only">
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            Basic Plan – Dec 2022
                            </td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">
                             USD $10.00
                            </td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                              Dec 1, 2022
                            </td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                              Paid
                            </td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                              $1999
                            </td>
                          <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                              <a
                                href="#"
                                class="text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
