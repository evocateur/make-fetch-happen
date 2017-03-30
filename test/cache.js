'use strict'

const test = require('tap').test

test('accepts a local path for caches')
test('matches requests by url')
test('sends both If-None-Match and If-Modified-Since headers')
test('status code is 304 on cache hit')
test('status code is 200 on cache miss + request')
test('cached request updated on 304 (so no longer stale)')
test('Warning header removed on cache hit')
test('supports matching using Vary header')
test('invalidates cache on put/post/delete')
test('supports range caching (partial requests)')
test('supports request streaming')
test('supports opts.timeout')
test('request failures do not update cache')
test('only 200-level responses cached')
test('falls back to stale cache on request failure')
test('full Cache-Control response support')
test('heuristic freshness lifetime')
test('Support Cache object injection')
test('mode: default')
test('mode: no-store')
test('mode: reload')
test('mode: no-cache')
test('mode: force-cache')
test('mode: only-if-cached')
