import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getInquiries } from '../../features/inquirySlice';
import { IInquiry } from '../../interfaces';

const AllInquiries = () => {
  const { data: inquiries } = useSelector((state: RootState) => state.inquiry);
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      offerupNick: '',
      customerName: '',
      firstName: '',
      productName: '',
    },
    onSubmit: () => {},
  });

  useEffect(() => {
    dispatch(
      getInquiries({
        payload: {
          offerupNick: '',
          firstName: '',
          customerName: '',
          productName: '',
        },
        page: 1,
      })
    );
  }, []);

  return (
    <div>
      <form
        className="grid grid-cols-10 w-full gap-2"
        onSubmit={formik.handleSubmit}
      >
        <div className="sm:col-span-2">
          <label
            htmlFor="offerupNick"
            className="block text-sm font-medium leading-6 text-black"
          >
            Offerup Nick
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="offerupNick"
              id="offerupNick"
              onChange={formik.handleChange}
              className="block w-full rounded-md border-0  py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="customerName"
            className="block text-sm font-medium leading-6 text-black"
          >
            Customer Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="customerName"
              id="customerName"
              onChange={formik.handleChange}
              className="block w-full rounded-md border-0  py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium leading-6 text-black"
          >
            Sales Person First Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={formik.handleChange}
              className="block w-full rounded-md border-0  py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="productName"
            className="block text-sm font-medium leading-6 text-black"
          >
            Product Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="productName"
              id="productName"
              onChange={formik.handleChange}
              className="block w-full rounded-md border-0  py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2 flex">
          <div className="flex w-full justify-start items-end">
            <button
              type="submit"
              className="rounded-md bg-[#111827] text-white py-[6px] px-6 block"
            >
              Search
            </button>
          </div>
        </div>
      </form>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-auto h-[80vh] sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="sticky top-0 bg-white">
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter "
                  >
                    Surname
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter "
                  >
                    Offerup Nick
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter "
                  >
                    Customer Name
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter "
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter "
                  >
                    Web/Showroom
                  </th>

                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter "
                  >
                    Region
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter "
                  >
                    Notes
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter "
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {inquiries.map((person: IInquiry) => (
                  <tr key={person.id}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      {person.firstName}{' '}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {person.lastName}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {person.offerupNick}
                    </td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {person.customerName}
                    </td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {person.to}
                    </td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {person.region}
                    </td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {person.notes}
                    </td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {person.to}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInquiries;
