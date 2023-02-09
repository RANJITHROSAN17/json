import type { BaseText } from "../text/base_text"
import { ValidText } from "../text/valid_text"

export class SpeechText implements BaseText {
	private readonly _speech_text: undefined
	private readonly _text: string

	public constructor(text: string | undefined) {
		const valid_text = new ValidText(text)

		this._text = valid_text.text
	}

	public get text(): string {
		return this._text
	}
}