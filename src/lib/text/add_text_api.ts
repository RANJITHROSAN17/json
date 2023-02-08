import type { SpeechLanguageCode } from "../speech/speech_language_code"
import type { Text } from "@prisma/client"
import { Api } from "../api/api"
import { ApiPath } from "../api/api_path"
import type { BaseText } from "./base_text"

export class AddTextApi {
	private readonly _api_path: ApiPath

	public constructor(language_code: SpeechLanguageCode, text: BaseText, private readonly _origin = '') {
		this._api_path = ApiPath.api_directory
			.connect('add-text')
			.connect(language_code.code)
			.connect_with_encoding(text.text)
	}

	public async fetch(): Promise<Text> {
		const api = new Api(this._api_path, this._origin)
		return await api.fetch<Text>()
	}
}