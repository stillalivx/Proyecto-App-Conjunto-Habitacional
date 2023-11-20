import * as dayjs from 'dayjs'

import 'dayjs/locale/es'
import utc from 'dayjs/plugin/utc'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('es')

dayjs.extend(utc)
dayjs.extend(relativeTime)

export { dayjs }