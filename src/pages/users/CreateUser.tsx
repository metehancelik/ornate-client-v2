import { Formik, useFormik } from "formik";
import * as Yup from 'yup'



const CreateUser = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            offerupNick: '',
            commission: '',
            userRole: '',
            invoiceName: '',
            invoiceAddress: '',
            IBAN: '',
            swiftCode: '',
            invoiceEmail: '',
            password: ''
        },
        onSubmit: handleSubmit,
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Isim giriniz')
        })

    })

    function handleSubmit() {

    }

    return (
        <form>
            <div className="space-y-12 px-4">

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Kullanıcı Bilgileri</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                Adı
                            </label>
                            <div className="mt-2">
                                <input
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                                Soyadı
                            </label>
                            <div className="mt-2">
                                <input
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="offerupNick" className="block text-sm font-medium leading-6 text-gray-900">
                                Offerup Kullanıcı Adı
                            </label>
                            <div className="mt-2">
                                <input
                                    value={formik.values.offerupNick}
                                    onChange={formik.handleChange}
                                    type="text"
                                    name="offerupNick"
                                    id="offerupNick"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="commission" className="block text-sm font-medium leading-6 text-gray-900">
                                Komisyon Oranı
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">%</span>
                                    <input
                                        value={formik.values.commission}
                                        onChange={formik.handleChange}
                                        type="number"
                                        name="commission"
                                        id="commission"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="userRole" className="block text-sm font-medium leading-6 text-gray-900">
                                Kullanıcı Rolü
                            </label>
                            <div className="mt-2">
                                <select
                                    id="userRole"
                                    name="userRole"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>Admin</option>
                                    <option>Sales</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Fatura Bilgileri</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="invoiceName" className="block text-sm font-medium leading-6 text-gray-900">
                                Fatura Adı Soyadı
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="invoiceName"
                                    id="invoiceName"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="invoiceAddress" className="block text-sm font-medium leading-6 text-gray-900">
                                Fatura Adresi
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="invoiceAddress"
                                    id="invoiceAddress"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="IBAN" className="block text-sm font-medium leading-6 text-gray-900">
                                IBAN
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="IBAN"
                                    id="IBAN"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="swiftCode" className="block text-sm font-medium leading-6 text-gray-900">
                                SWIFT Kodu
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="swiftCode"
                                    id="swiftCode"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Giriş Bilgileri</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="invoiceEmail" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="invoiceEmail"
                                    id="invoiceEmail"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Şifre
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="password"
                                    id="password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    İptal
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Kaydet
                </button>
            </div>
        </form>
    )
}

export default CreateUser