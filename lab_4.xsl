<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version = "1.0"
xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">
<xsl:template match = "/">
    <html>
       <body>
            <table border = "1">
                <tr bgcolor="MediumAquamarine">
                    <th style="text-align: center">Фамилия</th>
                    <th style="text-align: center">Имя</th>
                    <th style="text-align: center">Дата рождения</th>
                    <th style="text-align: center">Оценка</th>
                </tr>
                <xsl:for-each select="group/student">
                    <tr>
                        <td style="text-align: center"><xsl:value-of select="surname"/></td>
                        <td style="text-align: center"><xsl:value-of select="name"/></td>
                        <td style="text-align: center"><xsl:value-of select="date"/></td>
                        <td style="text-align: center"><xsl:value-of select="mark"/></td> 
                    </tr>
                </xsl:for-each>
            </table>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>