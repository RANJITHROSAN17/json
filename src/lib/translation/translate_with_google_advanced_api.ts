import type { AppLocaleCode } from "../language/app_locale_code";
import { TranslationText } from "../translation/translation_text";
import { Api } from "../api/api";
import { ApiPath } from "../api/api_path";

export class TranslateWithGoogleAdvancedApi {
	private readonly _api_path: ApiPath

	public constructor(translation_text: TranslationText, target_app_locale_code: AppLocaleCode, private readonly _origin = '') {
		this._api_path = ApiPath.api_directory
			.connect('translate-with-google-advanced')
			.connect_with_encoding(translation_text.text)
			.connect(target_app_locale_code.code)
	}

	public async fetch(): Promise<TranslationText> {
		const api = new Api(this._api_path, this._origin)
		const result = await api.fetch<string>()
		const translation_text = new TranslationText(result)
		
		return translation_text
	}
}