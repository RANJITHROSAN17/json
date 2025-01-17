import { Repository } from '$lib/app/repository'
import { expect, test } from 'vitest'
import { ChatEntity } from './chat_entity'

test('save and find_many', async () => {
	const chat_entity = new ChatEntity('test_room_id', 'en-US', 'test_name', 'test_message')

	const chat_log = await Repository.chat_log.save(chat_entity)

	expect(chat_log.room_id).toEqual(chat_entity.room_id.value)
	expect(chat_log.locale_code).toEqual(chat_entity.locale_code.value)
	expect(chat_log.name).toEqual(chat_entity.name.value)
	expect(chat_log.message).toEqual(chat_entity.message.value)

	const chat_entity2 = new ChatEntity('test_room_id2', 'en-US', 'test_name2', 'test_message2')
	await Repository.chat_log.save(chat_entity2)

	const chat_logs = await Repository.chat_log.find_many()

	expect(chat_logs.length).toBeGreaterThanOrEqual(2)
})
