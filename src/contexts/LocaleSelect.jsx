import Select from "../components/common/Select";
import { useLocale, useSetLocale } from "./LocaleContext";

function LocaleSelect() {
  const locale = useLocale();
  const setLocale = useSetLocale();

  return (
    <Select value={locale} onChange={(e) => setLocale(e.target.value)}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </Select>
  );
}
export default LocaleSelect;
