import type { SpeechText } from '$lib/speech/speech_text'
import type { Text } from '@prisma/client'
import { Api } from '../api/api'
import { ApiPath } from '../api/api_path'
import type { SpeechLanguageCode } from '../speech/speech_language_code'

export class GetTranslationApi {
	private readonly _api_path: ApiPath

	public constructor(
		speech_text: SpeechText,
		source_speech_language_code: SpeechLanguageCode,
		target_speech_language_code: SpeechLanguageCode,
	) {
		this._api_path = ApiPath.api_directory
			.connect('get-translation')
			.connect_with_encoding(speech_text.text)
			.connect(source_speech_language_code.code)
			.connect(target_speech_language_code.code)
	}

	public async fetch(): Promise<Text[]> {
		const api = new Api(this._api_path)
		return await api.fetch<Text[]>()
	}
}
