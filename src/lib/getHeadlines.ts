import { supabase } from '@services/supabase'
import { Headline } from 'src/types'

export async function getLast24() {
    const { data } = await supabase
        .from(`last_24_hours`)
        .select('*')
    const headlines: Array<Headline> = [...data as Array<Headline>];
    return { data: headlines };
}

export async function pagination(offset = 0, limit = 8) {
    const { data } = await supabase.rpc('pagination', { o: offset, l: limit })
    const headlines: Array<Headline> = [...data as Array<Headline>];
    return { data: headlines };
}