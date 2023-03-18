export class Assert {
	public static defined<T>(value: T | undefined, message: string): T {
		if (!value) throw new Error(message)

		return value
	}
}