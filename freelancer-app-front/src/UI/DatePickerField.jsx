import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function ({ label, date, setDate }) {
    return (
        <div>
            <span className="mb-2 block te-secondary-700">{label}</span>
            <DatePicker
                containerClassName="w-full"
                inputClass="textField__input"
                calendarPosition="bottom-center"
                value={date}
                onChange={(date) => setDate(date)}
                format="YYYYY/MM/DD"
                calendar={persian}
                locale={persian_fa}
            />

        </div>
    )
}