import { BackgroundIndex } from '../background/background_index'
import gradient_geometric_shapes from '../assets/gradient_geometric_shapes.png'
import dog from '../assets/dog.jpg'
import pudding from '../assets/pudding.jpg'

export class Background {
	private readonly _background_urls: string[] = [gradient_geometric_shapes, dog, pudding]
	private _background_url: string

	public constructor(private readonly _background_index: BackgroundIndex) {
		this._background_url = this._background_urls[_background_index.index]
	}

	public static from_local_storage(): Background {
		const saved_index = localStorage.getItem('background_index')

		if (!saved_index) {
			const new_background = new Background(new BackgroundIndex(0))

			new_background._save_to_local_storage()

			return new_background
		}

		const background_index = BackgroundIndex.from_string(saved_index)
		const background = new Background(background_index)

		return background
	}

	private _save_to_local_storage(): void {
		localStorage.setItem('background_index', this._background_index.index.toString())
	}

	public get_next_background(): Background {
		const next_index = (this._background_index.index + 1) % this._background_urls.length
		const next_background_index = new BackgroundIndex(next_index)
		const next_background = new Background(next_background_index)

		return next_background
	}

	public transition_background(): Background {
		const next_background = this.get_next_background()

		next_background._save_to_local_storage()

		return next_background
	}

	public get background_url(): string {
		return this._background_url
	}

	public get background_index(): BackgroundIndex {
		return this._background_index
	}
}
