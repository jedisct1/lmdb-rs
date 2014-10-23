var searchIndex = {};
searchIndex['lmdb'] = {"items":[[0,"","lmdb",""],[1,"MDB_stat","",""],[11,"ms_psize","","",0],[11,"ms_depth","","",0],[11,"ms_branch_pages","","",0],[11,"ms_leaf_pages","","",0],[11,"ms_overflow_pages","","",0],[11,"ms_entries","","",0],[1,"MDB_envinfo","",""],[11,"me_mapaddr","","",1],[11,"me_mapsize","","",1],[11,"me_last_pgno","","",1],[11,"me_last_txnid","","",1],[11,"me_maxreaders","","",1],[11,"me_numreaders","","",1],[0,"traits","","Conversion of data structures to and from MDB_val"],[6,"ToMdbValue","lmdb::traits","`ToMdbValue` is supposed to convert a value to a memory\nslice which `lmdb` uses to prevent multiple copying data\nmultiple times. May be unsafe."],[9,"to_mdb_value","","",2],[6,"FromMdbValue","","`FromMdbValue` is supposed to reconstruct a value from\nmemory slice. It allows to use zero copy where it is\nrequired."],[9,"from_mdb_value","","",3],[10,"to_mdb_value","collections::vec","",4],[10,"from_mdb_value","","",4],[10,"to_mdb_value","collections::string","",5],[10,"from_mdb_value","","",5],[0,"core","lmdb","High level wrapper of LMDB APIs"],[1,"EnvFlags","lmdb::core","A set of environment flags which could be changed after opening"],[1,"EnvCreateFlags","","A set of all environment flags"],[1,"DbFlags","","A set of database flags"],[1,"Database","","Database"],[1,"EnvBuilder","",""],[1,"Environment","","Represents LMDB Environment. Should be opened using `EnvBuilder`"],[1,"NativeTransaction","",""],[1,"Transaction","",""],[1,"ReadonlyTransaction","",""],[1,"Cursor","",""],[1,"CursorValue","",""],[1,"CursorIterator","",""],[1,"CursorKeyRangeIter","",""],[1,"CursorIter","",""],[1,"CursorItemIter","",""],[1,"MdbValue","",""],[0,"errors","","MdbError wraps information about LMDB error"],[2,"MdbError","lmdb::core::errors",""],[12,"NotFound","","",6],[12,"KeyExists","","",6],[12,"TxnFull","","",6],[12,"CursorFull","","",6],[12,"PageFull","","",6],[12,"Corrupted","","",6],[12,"Panic","","",6],[12,"InvalidPath","","",6],[12,"StateError","","",6],[12,"Custom","","",6],[10,"new_with_code","","",6],[10,"fmt","","",6],[4,"MdbResult","lmdb::core",""],[18,"EnvNoSync","","Don't flush system buffers to disk when committing a transaction. This optimization means a system crash can corrupt the database or lose the last transactions if buffers are not yet flushed to disk. The risk is governed by how often the system flushes dirty buffers to disk and how often mdb_env_sync() is called. However, if the filesystem preserves write order and the MDB_WRITEMAP flag is not used, transactions exhibit ACI (atomicity, consistency, isolation) properties and only lose D (durability). I.e. database integrity is maintained, but a system crash may undo the final transactions. Note that (MDB_NOSYNC | MDB_WRITEMAP) leaves the system with no hint for when to write transactions to disk, unless mdb_env_sync() is called. (MDB_MAPASYNC | MDB_WRITEMAP) may be preferable. This flag may be changed at any time using mdb_env_set_flags()."],[18,"EnvNoMetaSync","","Flush system buffers to disk only once per transaction, omit the metadata flush. Defer that until the system flushes files to disk, or next non-MDB_RDONLY commit or mdb_env_sync(). This optimization maintains database integrity, but a system crash may undo the last committed transaction. I.e. it preserves the ACI (atomicity, consistency, isolation) but not D (durability) database property. This flag may be changed at any time using mdb_env_set_flags()."],[18,"EnvMapAsync","","When using MDB_WRITEMAP, use asynchronous flushes to disk. As with MDB_NOSYNC, a system crash can then corrupt the database or lose the last transactions. Calling mdb_env_sync() ensures on-disk database integrity until next commit. This flag may be changed at any time using mdb_env_set_flags()."],[18,"EnvNoMemInit","","Don't initialize malloc'd memory before writing to unused spaces in the data file. By default, memory for pages written to the data file is obtained using malloc. While these pages may be reused in subsequent transactions, freshly malloc'd pages will be initialized to zeroes before use. This avoids persisting leftover data from other code (that used the heap and subsequently freed the memory) into the data file. Note that many other system libraries may allocate and free memory from the heap for arbitrary uses. E.g., stdio may use the heap for file I/O buffers. This initialization step has a modest performance cost so some applications may want to disable it using this flag. This option can be a problem for applications which handle sensitive data like passwords, and it makes memory checkers like Valgrind noisy. This flag is not needed with MDB_WRITEMAP, which writes directly to the mmap instead of using malloc for pages. The initialization is also skipped if MDB_RESERVE is used; the caller is expected to overwrite all of the memory that was reserved in that case. This flag may be changed at any time using mdb_env_set_flags()."],[18,"EnvCreateFixedMap","","Use a fixed address for the mmap region. This flag must be\n specified when creating the environment, and is stored persistently\n in the environment. If successful, the memory map will always reside\n at the same virtual address and pointers used to reference data items\n in the database will be constant across multiple invocations. This \noption may not always work, depending on how the operating system has\n allocated memory to shared libraries and other uses. The feature is highly experimental."],[18,"EnvCreateNoSubDir","","By default, LMDB creates its environment in a directory whose\npathname is given in path, and creates its data and lock files\nunder that directory. With this option, path is used as-is\nfor the database main data file. The database lock file is\nthe path with \"-lock\" appended."],[18,"EnvCreateNoSync","","Don't flush system buffers to disk when committing a\ntransaction. This optimization means a system crash can corrupt\nthe database or lose the last transactions if buffers are not\nyet flushed to disk. The risk is governed by how often the\nsystem flushes dirty buffers to disk and how often\nmdb_env_sync() is called. However, if the filesystem preserves\nwrite order and the MDB_WRITEMAP flag is not used, transactions\nexhibit ACI (atomicity, consistency, isolation) properties and\nonly lose D (durability). I.e. database integrity is\nmaintained, but a system crash may undo the final\ntransactions. Note that (MDB_NOSYNC | MDB_WRITEMAP) leaves\nthe system with no hint for when to write transactions to\ndisk, unless mdb_env_sync() is called.\n(MDB_MAPASYNC | MDB_WRITEMAP) may be preferable. This flag\nmay be changed at any time using mdb_env_set_flags()."],[18,"EnvCreateReadOnly","","Open the environment in read-only mode. No write operations\nwill be allowed. LMDB will still modify the lock file - except\non read-only filesystems, where LMDB does not use locks."],[18,"EnvCreateNoMetaSync","","Flush system buffers to disk only once per transaction,\nomit the metadata flush. Defer that until the system flushes\nfiles to disk, or next non-MDB_RDONLY commit or mdb_env_sync().\nThis optimization maintains database integrity, but a system\ncrash may undo the last committed transaction. I.e. it\npreserves the ACI (atomicity, consistency, isolation) but\nnot D (durability) database property. This flag may be changed\nat any time using mdb_env_set_flags()."],[18,"EnvCreateWriteMap","","Use a writeable memory map unless MDB_RDONLY is set. This is\nfaster and uses fewer mallocs, but loses protection from\napplication bugs like wild pointer writes and other bad updates\ninto the database. Incompatible with nested\ntransactions. Processes with and without MDB_WRITEMAP on the\nsame environment do not cooperate well."],[18,"EnvCreataMapAsync","","When using MDB_WRITEMAP, use asynchronous flushes to disk. As\nwith MDB_NOSYNC, a system crash can then corrupt the database or\nlose the last transactions. Calling mdb_env_sync() ensures\non-disk database integrity until next commit. This flag may be\nchanged at any time using mdb_env_set_flags()."],[18,"EnvCreateNoTls","","Don't use Thread-Local Storage. Tie reader locktable slots to\nffi::MDB_txn objects instead of to threads. I.e. mdb_txn_reset()\nkeeps the slot reseved for the ffi::MDB_txn object. A thread may\nuse parallel read-only transactions. A read-only transaction may\nspan threads if the user synchronizes its use. Applications that\nmultiplex many user threads over individual OS threads need this\noption. Such an application must also serialize the write\ntransactions in an OS thread, since LMDB's write locking is\nunaware of the user threads."],[18,"EnvCreateNoLock","","Don't do any locking. If concurrent access is anticipated, the\ncaller must manage all concurrency itself. For proper operation\nthe caller must enforce single-writer semantics, and must ensure\nthat no readers are using old transactions while a writer is\nactive. The simplest approach is to use an exclusive lock so\nthat no readers may be active at all when a writer begins. "],[18,"EnvCreateNoReadAhead","","Turn off readahead. Most operating systems perform readahead on\nread requests by default. This option turns it off if the OS\nsupports it. Turning it off may help random read performance\nwhen the DB is larger than RAM and system RAM is full. The\noption is not implemented on Windows."],[18,"EnvCreateNoMemInit","","Don't initialize malloc'd memory before writing to unused spaces\nin the data file. By default, memory for pages written to the\ndata file is obtained using malloc. While these pages may be\nreused in subsequent transactions, freshly malloc'd pages will\nbe initialized to zeroes before use. This avoids persisting\nleftover data from other code (that used the heap and\nsubsequently freed the memory) into the data file. Note that\nmany other system libraries may allocate and free memory from\nthe heap for arbitrary uses. E.g., stdio may use the heap for\nfile I/O buffers. This initialization step has a modest\nperformance cost so some applications may want to disable it\nusing this flag. This option can be a problem for applications\nwhich handle sensitive data like passwords, and it makes memory\ncheckers like Valgrind noisy. This flag is not needed with\nMDB_WRITEMAP, which writes directly to the mmap instead of using\nmalloc for pages. The initialization is also skipped if\nMDB_RESERVE is used; the caller is expected to overwrite all of\nthe memory that was reserved in that case. This flag may be\nchanged at any time using mdb_env_set_flags()."],[18,"DbReverseKey","","Keys are strings to be compared in reverse order, from the\nend of the strings to the beginning. By default, Keys are\ntreated as strings and compared from beginning to end."],[18,"DbAllowDups","","Duplicate keys may be used in the database. (Or, from another\nperspective, keys may have multiple data items, stored in sorted\norder.) By default keys must be unique and may have only a\nsingle data item."],[18,"DbIntKey","","Keys are binary integers in native byte order. Setting this\noption requires all keys to be the same size, typically\nsizeof(int) or sizeof(size_t)."],[18,"DbDupFixed","","This flag may only be used in combination with\nffi::MDB_DUPSORT. This option tells the library that the data\nitems for this database are all the same size, which allows\nfurther optimizations in storage and retrieval. When all data\nitems are the same size, the ffi::MDB_GET_MULTIPLE and\nffi::MDB_NEXT_MULTIPLE cursor operations may be used to retrieve\nmultiple items at once."],[18,"DbAllowIntDups","","This option specifies that duplicate data items are also\nintegers, and should be sorted as such."],[18,"DbReversedDups","","This option specifies that duplicate data items should be\ncompared as strings in reverse order."],[18,"DbCreate","","Create the named database if it doesn't exist. This option\nis not allowed in a read-only transaction or a read-only\nenvironment."],[6,"ReadTransaction","",""],[9,"get_read_transaction","","",7],[6,"WriteTransaction","",""],[9,"get_write_transaction","","",8],[6,"CursorIteratorInner","","This one should once become public and allow to create custom\niterators"],[9,"init_cursor","","Returns true if initialization successful, for example that\nthe key exists.",9],[9,"move_to_next","","Returns true if there is still data and iterator is in correct range",9],[10,"get_size_hint","","Returns size hint considering current state of cursor",9],[10,"hash","","",10],[10,"cmp","","",10],[10,"partial_cmp","","",10],[10,"lt","","",10],[10,"le","","",10],[10,"gt","","",10],[10,"ge","","",10],[10,"clone","","",10],[10,"eq","","",10],[10,"ne","","",10],[10,"empty","","Returns an empty set of flags.",10],[10,"all","","Returns the set containing all flags.",10],[10,"bits","","Returns the raw value of the flags currently stored.",10],[10,"from_bits","","Convert from underlying bit representation, unless that\nrepresentation contains bits that do not correspond to a flag.",10],[10,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits\nthat do not correspond to flags.",10],[10,"is_empty","","Returns `true` if no flags are currently stored.",10],[10,"is_all","","Returns `true` if all flags are currently set.",10],[10,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",10],[10,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",10],[10,"insert","","Inserts the specified flags in-place.",10],[10,"remove","","Removes the specified flags in-place.",10],[10,"toggle","","Toggles the specified flags in-place.",10],[10,"bitor","","Returns the union of the two sets of flags.",10],[10,"bitxor","","Returns the left flags, but with all the right flags toggled.",10],[10,"bitand","","Returns the intersection between the two sets of flags.",10],[10,"sub","","Returns the set difference of the two sets of flags.",10],[10,"not","","Returns the complement of this set of flags.",10],[10,"hash","","",11],[10,"cmp","","",11],[10,"partial_cmp","","",11],[10,"lt","","",11],[10,"le","","",11],[10,"gt","","",11],[10,"ge","","",11],[10,"clone","","",11],[10,"eq","","",11],[10,"ne","","",11],[10,"empty","","Returns an empty set of flags.",11],[10,"all","","Returns the set containing all flags.",11],[10,"bits","","Returns the raw value of the flags currently stored.",11],[10,"from_bits","","Convert from underlying bit representation, unless that\nrepresentation contains bits that do not correspond to a flag.",11],[10,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits\nthat do not correspond to flags.",11],[10,"is_empty","","Returns `true` if no flags are currently stored.",11],[10,"is_all","","Returns `true` if all flags are currently set.",11],[10,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",11],[10,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",11],[10,"insert","","Inserts the specified flags in-place.",11],[10,"remove","","Removes the specified flags in-place.",11],[10,"toggle","","Toggles the specified flags in-place.",11],[10,"bitor","","Returns the union of the two sets of flags.",11],[10,"bitxor","","Returns the left flags, but with all the right flags toggled.",11],[10,"bitand","","Returns the intersection between the two sets of flags.",11],[10,"sub","","Returns the set difference of the two sets of flags.",11],[10,"not","","Returns the complement of this set of flags.",11],[10,"hash","","",12],[10,"cmp","","",12],[10,"partial_cmp","","",12],[10,"lt","","",12],[10,"le","","",12],[10,"gt","","",12],[10,"ge","","",12],[10,"clone","","",12],[10,"eq","","",12],[10,"ne","","",12],[10,"empty","","Returns an empty set of flags.",12],[10,"all","","Returns the set containing all flags.",12],[10,"bits","","Returns the raw value of the flags currently stored.",12],[10,"from_bits","","Convert from underlying bit representation, unless that\nrepresentation contains bits that do not correspond to a flag.",12],[10,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits\nthat do not correspond to flags.",12],[10,"is_empty","","Returns `true` if no flags are currently stored.",12],[10,"is_all","","Returns `true` if all flags are currently set.",12],[10,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",12],[10,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",12],[10,"insert","","Inserts the specified flags in-place.",12],[10,"remove","","Removes the specified flags in-place.",12],[10,"toggle","","Toggles the specified flags in-place.",12],[10,"bitor","","Returns the union of the two sets of flags.",12],[10,"bitxor","","Returns the left flags, but with all the right flags toggled.",12],[10,"bitand","","Returns the intersection between the two sets of flags.",12],[10,"sub","","Returns the set difference of the two sets of flags.",12],[10,"not","","Returns the complement of this set of flags.",12],[10,"get","","Retrieves a value by key. In case of DbAllowDups it will be the first value",13],[10,"set","","Sets value for key. In case of DbAllowDups it will add a new item",13],[10,"del","","Deletes value for key.",13],[10,"del_item","","Should be used only with DbAllowDups. Deletes corresponding (key, value)",13],[10,"new_cursor","","Returns a new cursor",13],[10,"del_db","","Deletes current db, also moves it out",13],[10,"clear","","Removes all key/values from db",13],[10,"iter","","Returns an iterator for all values in database",13],[10,"keyrange","","Returns an iterator for values between start_key and end_key.\nCurrently it works only for unique keys (i.e. it will skip\nmultiple items when DB created with ffi::MDB_DUPSORT).\nIterator is valid while cursor is valid",13],[10,"item_iter","","Returns an iterator for all items (i.e. values with same key)",13],[10,"drop","","",13],[10,"new","","",14],[10,"flags","","Sets environment flags",14],[10,"max_readers","","Sets max concurrent readers operating on environment",14],[10,"max_dbs","","Set max number of databases",14],[10,"map_size","","Sets max environment size, i.e. size in memory/disk of\nall data",14],[10,"open","","Opens environment in specified path",14],[10,"new","","",15],[10,"stat","","",15],[10,"info","","",15],[10,"sync","","Sync environment to disk",15],[10,"set_flags","","This one sets only flags which are available for change even\nafter opening, see also [get_flags](#method.get_flags) and [get_all_flags](#method.get_all_flags)",15],[10,"get_flags","","Get flags of environment, which could be changed after it was opened\nuse [get_all_flags](#method.get_all_flags) if you need also creation time flags",15],[10,"get_all_flags","","Get all flags of environment, including which were specified on creation\nSee also [get_flags](#method.get_flags) if you're interested only in modifiable flags",15],[10,"get_maxreaders","","",15],[10,"get_maxkeysize","","",15],[10,"copy_to_fd","","Creates a backup copy in specified file descriptor",15],[10,"get_fd","","Gets file descriptor of this environment",15],[10,"copy_to_path","","Creates a backup copy in specified path",15],[10,"new_transaction","","Creates a new read-write transaction",15],[10,"get_reader","","Creates a readonly transaction",15],[10,"get_or_create_db","","Returns or creates a named database",15],[10,"get_default_db","","Returns default database",15],[10,"drop","","",15],[10,"get","","",16],[10,"set","","Sets a new value for key, in case of enabled duplicates\nit actually appends a new value",16],[10,"del_item","","If duplicate keys are allowed deletes value for key which is equal to data",16],[10,"del","","Deletes all values for key",16],[10,"new_cursor","","creates a new cursor in current transaction tied to db",16],[10,"new_item_iter","","Creates a new item cursor, i.e. cursor which navigates all\nvalues with the same key (if AllowsDup was specified)",16],[10,"del_db","","Deletes provided database completely",16],[10,"empty_db","","Empties provided database",16],[10,"new_child","","",17],[10,"new_ro_child","","",17],[10,"commit","","Commits transaction, moves it out",17],[10,"abort","","Aborts transaction, moves it out",17],[10,"get_write_transaction","","",17],[10,"get_read_transaction","","",17],[10,"drop","","",17],[10,"new_ro_child","","",18],[10,"abort","","Aborts transaction. But readonly transaction could be\nreused later by calling `renew`",18],[10,"reset","","Resets read only transaction, handle is kept. Must be followed\nby call to `renew`",18],[10,"renew","","Acquires a new reader lock after transaction\n`abort` or `reset`",18],[10,"get_read_transaction","","",18],[10,"drop","","",18],[10,"to_first","","Moves cursor to first entry",19],[10,"to_last","","Moves cursor to last entry",19],[10,"to_key","","Moves cursor to first entry for key if it exists",19],[10,"to_gte_key","","Moves cursor to first entry for key greater than\nor equal to ke",19],[10,"to_item","","Moves cursor to specific item (for example, if cursor\nalready points to a correct key and you need to delete\na specific item through cursor)",19],[10,"to_next_key","","Moves cursor to next key, i.e. skip items\nwith duplicate keys",19],[10,"to_next_item","","Moves cursor to next item with the same key as current",19],[10,"to_prev_key","","Moves cursor to prev entry, i.e. skips items\nwith duplicate keys",19],[10,"to_prev_item","","Moves cursor to prev item with the same key as current",19],[10,"to_first_item","","Moves cursor to first item with the same key as current",19],[10,"to_last_item","","Moves cursor to last item with the same key as current",19],[10,"get","","Retrieves current key/value as tuple",19],[10,"replace","","Overwrites value for current item\nNote: overwrites max cur_value.len() bytes",19],[10,"add_item","","Adds a new item when created with allowed duplicates",19],[10,"del","","Deletes current key",19],[10,"del_item","","Deletes only current item",19],[10,"del_all","","Deletes all items with same key as current",19],[10,"item_count","","Returns count of items with the same key as current",19],[10,"drop","","",19],[10,"get_key","","",20],[10,"get_value","","",20],[10,"get","","",20],[10,"next","","",21],[10,"size_hint","","",21],[10,"new","","",22],[10,"init_cursor","","",22],[10,"move_to_next","","",22],[10,"init_cursor","","",23],[10,"move_to_next","","",23],[10,"new","","",24],[10,"init_cursor","","",24],[10,"move_to_next","","",24],[10,"get_size_hint","","",24],[10,"new","","",25],[10,"new_from_sized","","",25],[10,"get_ref","","",25],[10,"get_size","","",25],[4,"mdb_filehandle_t","lmdb",""],[10,"to_mdb_value","lmdb::core","",25]],"paths":[[1,"MDB_stat"],[1,"MDB_envinfo"],[6,"ToMdbValue"],[6,"FromMdbValue"],[1,"Vec"],[1,"String"],[2,"MdbError"],[6,"ReadTransaction"],[6,"WriteTransaction"],[6,"CursorIteratorInner"],[1,"EnvFlags"],[1,"EnvCreateFlags"],[1,"DbFlags"],[1,"Database"],[1,"EnvBuilder"],[1,"Environment"],[1,"NativeTransaction"],[1,"Transaction"],[1,"ReadonlyTransaction"],[1,"Cursor"],[1,"CursorValue"],[1,"CursorIterator"],[1,"CursorKeyRangeIter"],[1,"CursorIter"],[1,"CursorItemIter"],[1,"MdbValue"]]};
initSearch(searchIndex);