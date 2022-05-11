import type { GhostSaver } from 'src/lib/savers/ghostSaver';
import { AWSGhostSaver } from 'src/lib/savers/awsSaver';
import { LocalFileGhostSaver } from 'src/lib/savers/localSaver';

export const saver = new LocalFileGhostSaver(process.env.BLOBSTORE_PATH);
//export const saver = new AWSGhostSaver('ap-northeast-1', 'ghost-collector');
