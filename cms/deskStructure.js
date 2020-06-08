import S from "@sanity/desk-tool/structure-builder";
import { TiUser, TiUserOutline } from 'react-icons/ti';

export default () =>
S.list()
    .title("MurrayJack.tech")
    .items([

        S.listItem()
        .title("My Details")
        .icon(TiUser)
        .child(
            S.editor().schemaType("personalDetails").documentId("personalDetails")
        ),

        S.divider(),

        S.listItem()
        .title("Official Details")
        .icon(TiUserOutline)
        .child(
            S.editor().schemaType("derbyInfo").documentId("derbyInfo")
        ),

        S.divider(),

        ...S.documentTypeListItems().filter(listItem => !['derbyInfo'].includes(listItem.getId()))

    ]);