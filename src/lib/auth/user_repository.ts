import type { User } from '@prisma/client'
import type { Email } from './email'

export interface UserRepository {
	find_unique(email: Email, can_register?: boolean): Promise<User | undefined>
}
