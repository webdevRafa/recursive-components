import { FolderIcon } from "@heroicons/react/20/solid";

interface FolderType {
  name: string;
  folders?: FolderType[];
}

export const Content: React.FC = () => {
  let folders = [
    {
      name: "Movies",
      folders: [
        {
          name: "Action",
          folders: [
            { name: "2000s", folders: [{ name: "Popular" }] },
            { name: "2010s" },
          ],
        },
        { name: "Comedy", folders: [{ name: "2000s" }] },
      ],
    },
    { name: "Music", folders: [{ name: "Rock" }, { name: "Classical" }] },
    { name: "Pictures" },
    { name: "Documents" },
  ];
  return (
    <>
      <div className="mx-auto bg-blue-800 py-10 px-2 max-w-[1200px] sticky top-0">
        <ul>
          <li className="my-1.5">
            <span className="flex items-center gap-1.5 text-white">
              <FolderIcon className="size-6 text-blue-200"></FolderIcon>
              Home
            </span>

            <ul className="pl-6">
              {folders.map((folder) => (
                <li className="my-1.5" key={folder.name}>
                  <span className="flex items-center gap-1.5 text-white">
                    <FolderIcon className="size-6 text-blue-200" />
                    {folder.name}
                  </span>

                  <ul className="pl-6">
                    {folder.folders?.map((folder) => (
                      <Folder folder={folder} />
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
interface FolderProps {
  folder: FolderType;
}
export const Folder: React.FC<FolderProps> = ({ folder }) => {
  return (
    <>
      <li className="my-1.5" key={folder.name}>
        <span className="flex items-center text-white gap-1.5">
          <FolderIcon className="size-6 text-blue-200" />
          {folder.name}
        </span>
        <ul className="pl-6">
          {folder.folders?.map((folder) => (
            <Folder folder={folder} />
          ))}
        </ul>
      </li>
    </>
  );
};
