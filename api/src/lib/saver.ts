import type { GhostSaver } from 'src/lib/savers/ghostSaver';
import { LocalFileGhostSaver } from 'src/lib/savers/localSaver';

export const saver = new LocalFileGhostSaver(process.env.BLOBSTORE_PATH);
