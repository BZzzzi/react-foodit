import { useLocale } from "../contexts/LocaleContext";

const dict = {
  ko: {
    // 버튼
    "confirm button": "확인",
    "cancel button": "취소",
    "edit button": "수정",
    "delete button": "삭제",
    "create button": "추가하기",
    "load more": "더보기",
    "submit button": "작성완료",

    // 정렬
    "sort by latest": "최신순",
    "sort by calorie": "칼로리순",

    // 모달 제목
    "edit calorie title": "칼로리 수정하기",
    "create calorie title": "칼로리 기록하기",

    // 입력 필드 플레이스 홀더
    "search keyword placeholder": "검색어를 입력해 주세요.",
    "food title placeholder": "제목을 입력해 주세요.",
    "food calorie placeholder": "칼로리를 입력해 주세요.",
    "food content placeholder": "내용을 입력해 주세요.",

    // 언어 선택
    language: "한국어",

    // 푸터
    "term of service": "서비스 이용약관",
    "privacy policy": "개인정보 처리방침",
  },
  en: {
    // 버튼
    "confirm button": "OK",
    "cancel button": "Cancel",
    "edit button": "Edit",
    "delete button": "Delete",
    "create button": "Create",
    "load more": "Load More",
    "submit button": "Submit",

    // 정렬
    "sort by latest": "Latest",
    "sort by calorie": "Calorie",

    // 모달 제목
    "edit calorie title": "Edit Calorie",
    "create calorie title": "Create Calorie",

    // 입력 필드 플레이스 홀더
    "search keyword placeholder": "Enter search keyword",
    "food title placeholder": "Enter title",
    "food calorie placeholder": "Enter calorie",
    "food content placeholder": "Enter content",

    // 언어 선택
    language: "English",

    // 푸터
    "term of service": "Terms of Service",
    "privacy policy": "Privacy Policy",
  },
};

function useTranslate() {
  const locale = useLocale();
  const translate = (key) => dict[locale][key] || "";
  return translate;
}

export default useTranslate;
