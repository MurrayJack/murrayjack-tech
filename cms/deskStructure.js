import S from "@sanity/desk-tool/structure-builder";
import { TiUser, TiUserOutline, TiGroup, TiThList, TiTick, TiHome, TiDocument } from 'react-icons/ti';

export default () =>
S.list()
    .title("MurrayJack.tech")
    .items([

        S.listItem()
            .title("My Details")
            .icon(TiUser)
            .child(
                S.editor().schemaType("personalDetails").documentId("ed82cfde-41fb-4841-b1ce-d65ebcc5561e")
            ),

        S.listItem()
            .title("Job Position")
            .icon(TiHome)
            .child(
                S.documentTypeList('jobposition')
            ),

        S.divider(),

        S.listItem()
            .title("Projects")
            .icon(TiTick)
            .child(
                S.documentTypeList('projects')
            ),

        S.divider(),

        S.listItem()
            .title("Official Details")
            .icon(TiUserOutline)
            .child(
                S.editor().schemaType("derbyInfo").documentId("derbyInfo")
            ),

        S.listItem()
            .title("Leagues")
            .icon(TiThList)
            .child(
                S.documentTypeList('league')
            ),


        S.listItem()
            .title("Tournaments")
            .icon(TiGroup)
            .child(
                S.documentTypeList('tournament')
            ),

        S.divider(),
        
        S.listItem()
            .title("Site Pages")
            .icon(TiDocument)
            .child(
                S.documentTypeList('sitePages')
            ),

    ]);